import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { mapTo, mergeMap, skip, switchMap, take } from 'rxjs/operators';
import { JokeService } from 'src/app/services/joke.service';
import { Joke } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  public showNotification$: Observable<boolean>;
  public jokes$: Observable<Array<Joke>>;
  public update$ = new Subject<void>();
  public forceReload$ = new Subject<void>();

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getDataJokes();
    this.handleNotification();
  }

  forceReload() {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  

  public getDataJokes() {
    const initialJokes$ = this.jokeService.getDataOnce();
    
    // update new data from or forceReload from button click, forceReload display when has no notification about new data comming
    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.jokeService.getDataOnce())
    );

    this.jokes$ = merge(initialJokes$, updates$);
  }

  public handleNotification() {
    /**
    * The problem here is FETCH NEW JOKES was pressed, forcing an update will complete the cache instance, meaning we no longer receive values in the component. 
    * The notification stream (initialNotifications$) is basically dead
    * ---> new instance of cache$ in service when button FETCH NEW JOKES was pressed, and in show$ using merge to listen reload$ click. So, the problem resolved
    * Check to console.log below to view result
    */
   const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
   const initialNotifications$ = this.getNotifications();

   // Here consolog to recognize FETCH NEW JOKES was presed lead to initialNotifications Observable completd, instead reload observable work 
   initialNotifications$.subscribe(val=> console.log('init-trigger', val));
   reload$.subscribe(val=> console.log('reload-trigger', val));

   const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
   // When click update button, value is refresh -> mapTo false and hide notifications for new data
   const hide$ = this.update$.pipe(mapTo(false));
  
   this.showNotification$ =  merge(show$, hide$);
  }

  private getNotifications() {
    return this.jokeService.jokes.pipe(
      skip(1)
    );
  }

}
