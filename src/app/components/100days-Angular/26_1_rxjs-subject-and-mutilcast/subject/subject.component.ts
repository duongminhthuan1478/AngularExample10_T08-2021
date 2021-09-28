import { Component, OnInit } from '@angular/core';
import { observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {
  public showMulticast = false;
  
  private createObservable = observer => ({
    next: (val) => console.log(observer, val),
    error: (err) => console.log(observer, err),
    complete: () => console.log(observer, 'complete')
  });

  constructor() { }

  ngOnInit(): void {
    // this.exampleSubject();
    // this.exampleBehaviorSubject();
  }

  public exampleSubject() {
    /** Recognise
     *  - weakness - disadvantage: Don't save latest value, the second subscribe cannot get 'Hello, first next' because it's called after first next() happen
     *     => solution: using BehaviorSubject
     *  -Strength - advantage: All subject and chilren (BehaviorSubject, ReplaySubject, AsyncSubject) essentially Observable + Observer => It's useful
     */
    const sb = new Subject();
    this.executeEmitValue(sb);
  }

  public exampleBehaviorSubject() {
    /** The value will be saved in property data. Using BehaviorSubject.value to get it
     *  => Even though we call subscribe after next value. It's still have a lasted value emitted
     * **/
    const behaveSb = new BehaviorSubject('Initial called');
    this.executeEmitValue(behaveSb);
  }


  private executeEmitValue(objSubject) {
    objSubject.subscribe(this.createObservable('subscribe-1'));
    objSubject.next('Hello, first called');

    setTimeout(() => {
      objSubject.subscribe(this.createObservable('subscribe-2'));
      objSubject.next('Hello, 2nd called');
    }, 5000);
  }
}
