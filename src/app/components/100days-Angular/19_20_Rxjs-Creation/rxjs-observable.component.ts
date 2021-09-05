import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { defer } from 'rxjs';
import { from, fromEvent, fromEventPattern, interval, Observable, of, timer } from 'rxjs';
import { take, takeUntil, throttleTime, } from 'rxjs/operators/';
import { observal } from 'src/app/utils/constants';

/**
 * Note: All example from this will be return a Observable
 */
@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html'
})
export class RxjsObservableComponent implements OnInit {
  
  public observableOf: Observable<any>;
  public observableFrom: Observable<any>;
  public observableFrom1: Observable<any>;
  public observableInterval: Observable<any>;
  public observableTimer: Observable<any>;

  public obDefer1: Observable<any>;
  public obDefer2: Observable<any>;
  public noDefer1: Observable<any>;
  public noDefer2: Observable<any>;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // create Observabel by of method
    this.observableOf = of('Hello Observable this is created from of() method');
     
    // 2 parameter => subscribe will be run twice with hello & hello1
    const observableFromOf1 = of('Hello', 'Hello1').subscribe(observal); 
   
    // Param is passed into from must be Array, Iteratable, Promise(target convert to observable)
    // from will be iterated and return one element by one: VD 'thuan' = > t,h,u,a,n
    this.observableFrom = from('tada'); // This equivalent to of('t', 'a', 'd', 'a')
    // Excep Promise.resolve('thuan') => 'thuan' => Promise(target convert to observable)
    this.observableFrom1 = from(Promise.resolve('thuan'));

    //callback subscribe will be log if onClickFromEvent run 
    this.onClickFromEvent().subscribe(val => {console.log('onClickFromEvent', val) });
    this.onMouseMove().subscribe(val => {console.log('onMouseMove', val) });

    //using interval; start from 0, 1s will emit new value
    // takeUntil timer: stop after 10s
    // this.observableInterval = interval(1000).pipe(takeUntil(timer(10000)));
    this.observableInterval = interval(1000).pipe(take(5)); // timer1 will emit a value every 1000ms for 5 iterations
    this.observableTimer = timer(5000, 1000); // Sau 5s delay, thì chạy interval 1s 1 lần

    const randomNoDefer$ = of(Math.random());
    this.noDefer1 = randomNoDefer$;
    this.noDefer2 = randomNoDefer$;
    // three subscribe, but only one value created, consider to using defer below
    // random$.subscribe(val => console.log("random1", val));
    // random$.subscribe(val => console.log("random2", val));
    // random$.subscribe(val => console.log("random3", val));

    
    /** when subscribe is called, defer is () so it's execute lazy and call Promise.resolve and return new Observable so new value will be created */
    const random1$ = defer(() => Promise.resolve(Math.random()));
    // const random1$ = defer(() => of(Math.random()));
    this.obDefer1 = random1$;
    this.obDefer2 = random1$;
    // random1$.subscribe(val => console.log("random with defer 1", val));
    // random1$.subscribe(val => console.log("random with defer 2", val));
    // random1$.subscribe(val => console.log("random with defer 3", val));

    
    
  }

  public onClickFromEvent(): Observable<Event> {
    let element = document.querySelector('#btnFromEvent');
    return fromEvent(element , 'click');
  }

  public onMouseMove() {
    let element = document.querySelector('.box');
    //throttleTime, điều tiết time, 1s chạy 1 lần
    // Có thể dùng fromEventPattern để mở rộng optiont thay cho fromEvent để làm những logic phức tap, chuyển đổi kết quả trước khi trả về cho subscribe
    return fromEvent(element , 'mousemove').pipe(throttleTime(1000));
  }

  
}



