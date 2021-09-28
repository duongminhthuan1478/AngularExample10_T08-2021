import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, observable, interval, Subscription, Observable } from 'rxjs';
import { share, take, tap, shareReplay, map } from 'rxjs/operators';
import { Joke, JokeResponse } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html'
})
export class MulticastComponent implements OnInit {
  public cached$;
  public jokes1: Observable<Array<Joke>>;
  public jokes2: Observable<Array<Joke>>;
  public jokes3: Observable<Array<Joke>>;

  private observerA = {
    next: x => console.log('A-next: ' + x),
    error: err => console.error('A-Error: ' + err),
    complete: () => console.log('A-Complete'),
  }

  private observerB = {
    next: x => console.log('B-next: ' + x),
    error: err => console.error('B-Error: ' + err),
    complete: () => console.log('B-Complete'),
  }
  
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.unicastAndMulticast();
    this.exampleMulticastWithCaching();
  }

  ngOnDestroy() {
    // When double click, click continuously, ngOnDestroy called but observable still run, because we did not unsubscribe yet
    console.log("Multicast component was destroyed")
   
  }

  private unicastAndMulticast() {
    // // unicast - normal observable
    // const observable = interval(500).pipe(take(5));
    // observable.subscribe(this.observerA); // result log 0, 1, 2, 3, 4 -> completed
    // observable.subscribe(this.observerB); // result log 0, 1, 2, 3, 4 -> completed

    /** Unicast above when subscriber subscribe, each of them is standalone.
     * How to share them with one execution? -> using multicast to connect them
     * Example below shows. When using multicast, if any new subscriber subscribe in processing sharedObservable run, it will emit currently value from source
     * (Việc subscriptionB subscribe sau 2s giống như coi 1 video đang livestream, người vào sau sẽ xem nội dung hiện tại thay vì từ đầu giống như unicast)
     */

    // multicast
    const sharedObservable = interval(500).pipe(
      take(5),
      share() // This is an alias for multicast(() => new Subject()), refCount().
    );

    // Refcount 0 -> 1 sharedObservable will automatically call connect() function by share operator
    const subscriptionA = sharedObservable.subscribe(this.observerA); // result log 0, 1, 2, 3, 4 ->completed

    let subscriptionB = null;
    setTimeout(() => {
      subscriptionB = sharedObservable.subscribe(this.observerB); // refcount 1 -> 2
      // result log 4-> completed, setTimeout timer = 2s => when sharedObservable run to 2s, value 4 will emit to 2 subscription A and B 
    }, 2000)


    setTimeout(() => {
      subscriptionA.unsubscribe(); // refCount from 2 => 1
    }, 3000);
    
    setTimeout(() => {
      subscriptionB.unsubscribe(); // refCount from 1 => 0 -> disconnect() called by shareoperator
    }, 5000);
  }


  private exampleMulticastWithCaching() {
    this.jokes1 = this.getJokeData();
    this.jokes1.subscribe(console.log)
    
    /**
     * if using share() operator at {@link getJokeData()}, Subject will not save value emiteed. Therefore, the http will be call again, this really not necessary
     * The joke1 will trigger that subscription and get that frist value and value emitted not SAVED. So the second value will call api and get another data
     *  => Using shareReplay(1) instead of share() to save the most latest value. This is short syntax multicast(() => new ReplaySubject()), refCount().
     */
    setTimeout(() => {
      this.jokes2 = this.jokes1;
      this.jokes2.subscribe(console.log)
    }, 500)

    setTimeout(() => {
      this.cached$.subscribe(val => console.log(val))
    }, 5000)
   
  }

  private getJokeData(): Observable<Joke[]> {
    if(!this.cached$) {
      this.cached$ = this.http.get<JokeResponse>('https://api.icndb.com/jokes/random/5?limitTo=[nerdy]').pipe(
        map(response => response.value),
        shareReplay(1) // When getJokeData() call it wil return lastest value instead of execution many times http request
      );
    }
    return this.cached$;
  }
}
