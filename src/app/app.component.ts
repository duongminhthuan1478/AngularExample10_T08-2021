import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-app';

  constructor( 
    public _utils: UtilsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ){
    this.router.events.subscribe(event => {
      this.handleLoadingBar(event)
    });
  }

  ngOnInit(): void {
   
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  private handleLoadingBar(event) {
    if(event instanceof NavigationStart) {
      this._utils.isLoading$.next(true);
    }
    else if(event instanceof NavigationEnd) {
      this._utils.isLoading$.next(false);
    } 
    else if(event instanceof NavigationCancel) {
      this._utils.isLoading$.next(false);
    } 
    else if(event instanceof NavigationError) {
      this._utils.isLoading$.next(false);
    }
  }
}
