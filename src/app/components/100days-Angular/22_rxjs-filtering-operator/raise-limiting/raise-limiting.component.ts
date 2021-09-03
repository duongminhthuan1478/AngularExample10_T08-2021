import { Component, OnInit } from '@angular/core';
import { asyncScheduler, fromEvent } from 'rxjs';
import { debounceTime, pluck, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-raise-limiting',
  templateUrl: './raise-limiting.component.html'
})
export class RaiseLimitingComponent implements OnInit {

  public isTestDebounceTime = false;
  public resultDebounceTime;

  constructor() { }

  ngOnInit(): void {
    this.usingThrottleTime();
    this.usingDebounceTime();
    
  }

  // Note: auditTime() is short-hand of ThrottleTime, it's same config trailing true, leading false
  private usingThrottleTime() {
    // defaultThottleConfig = { leading: true, trailing: false }
    const throttleConfig = {
      leading: false, // click continuously -> get first -> timmer run -> timer has pased, if any click repeat process
      trailing: true // click continuously -> timer run -> timer has passed -> get lastes click -> if any click repeat process
    }
  
    const element = document.getElementById('btnClickme');
    const doubleClick = fromEvent(element, 'click').pipe(
      throttleTime(2000, asyncScheduler, throttleConfig)
    );

    // const doubleClick = fromEventPattern(
    //   (addHandler) => {
    //     document.getElementById('btnClickme').addEventListener('click', addHandler);
    //   },
    //   (removeHandler) => {
    //     document.getElementById('btnClickme').removeEventListener('click', removeHandler);
    //   }
    // ).pipe(throttleTime(2000, asyncScheduler, throttleConfig));
    
    doubleClick.subscribe((throttleValue: Event) => {
      console.log(`Double-clicked! Timestamp: ${throttleValue.timeStamp}`);
    });
  }

  // Debounce time usually be used in input, to prevent call handle logic continuously, example in formcontrol end-user type keyboard continuously
  private usingDebounceTime() {
    this.isTestDebounceTime = true;

    // pluck(): get value from object -> target.value
    
    // if no using debounceTime: input => thuan, output=> t, th, thu, thua, thuan
    // this.resultDebounceTime = fromEvent(document.getElementById('inputTestDebounceTime'), 'keydown').pipe(pluck('target', 'value')).subscribe(console.log);
  
    // debounceTime: if user stop 1s => value is emited(subscribe run and return value)
    this.resultDebounceTime = fromEvent(document.getElementById('inputTestDebounceTime'), 'keydown').pipe(debounceTime(1000), pluck('target', 'value'));

  }

  public onClick(event: Event) {
    console.log("At the moment click", event.timeStamp);
  }
}
