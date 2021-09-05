import { takeUntil, takeWhile } from 'rxjs/operators/';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Subscription, interval, Observable } from 'rxjs';
import { observal } from 'src/app/utils/constants';

@Component({
  selector: 'app-take-until-and-take-while',
  templateUrl: './take-until-and-take-while.component.html'
})
export class TakeUntilAndTakeWhileComponent implements OnInit {

  showUsingSubscription = false;
  showUsingTakeUntil = false;
  showUsingTakeWhile = false;

  destroyUnsubscribe$ = new Subject();
  subscription: Subscription = null;
  
  behaviorSubject1$ = new BehaviorSubject<string>('BehaviorSubject1 work');
  behaviorSubject2$ = new BehaviorSubject<string>('BehaviorSubject2 work');
    
  resultTakeWhile: Observable<number>;
  constructor() { }

  ngOnInit(): void {
    // this.usingSuscription();
    // this.usingTakeUntil();
    this.usingTakeWhile();
  }

  public nextValue() {
    this.behaviorSubject1$.next('Hello');
    this.behaviorSubject2$.next('This is Duong Minh Thuan');
  }

  public stopSubscribe() {
    this.destroyUnsubscribe$.next();
    this.destroyUnsubscribe$.complete();
  }

  ngOnDestroy() {
    // using Subject  + takeUntil to unsubscribe
    this.stopSubscribe();
  }

  // using subscription to unsubscribe Observables
  private usingSuscription() {
    this.showUsingSubscription = true;

    this.subscription = this.behaviorSubject1$.subscribe(observal);
    const subscription2 = this.behaviorSubject2$.subscribe(observal);
    this.subscription.add(subscription2);
  }

  private usingTakeUntil() {
    this.showUsingTakeUntil = true;

    // takeUntil: The param is notifier(Observable), Emits the values emitted by the source Observable until a notifier Observable emits a value.
    // When notifier emit value(using next()) => source Observable is complete, unsubscribe
    this.behaviorSubject1$.pipe(takeUntil(this.destroyUnsubscribe$)).subscribe(observal)
    this.behaviorSubject2$.pipe(takeUntil(this.destroyUnsubscribe$)).subscribe(observal)
  }

  private usingTakeWhile() {
    this.showUsingTakeWhile = true;

    // using takeWhile to stop
    this.resultTakeWhile = interval(1000).pipe(takeWhile(x => x < 5));
  }

}
