import { Toaster } from './../../../shared/components/notification-toaster/notification-toaster.component';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { concat, interval, merge, Observable } from 'rxjs';
import { distinct, endWith, filter, map, startWith, take, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const observal = {
  next: (val) => console.log('nextValue', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete')
};

@Component({
  selector: 'app-rxjx-combination',
  templateUrl: './rxjx-combination.component.html',
  styleUrls: ['./rxjx-combination.component.scss']
})

export class RxjxCombinationComponent implements OnInit {

  constructor(
    public _utils: UtilsService, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // create combination
    // this.exampleConcat();
    // this.exampleRace();
    // this.exampleMerge();
    
    // pipe-able combination
    // this.exampleWithLastestFrom();
    this.exampleStartWith();
    
  }

  private exampleStartWith() {
    const apiCall = this.http.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-20');
    // can using pipe to convert response result, add new property username: 'Duong Minh Thuan'
    // Access into getApiResponse to check how startWith is used in loading spinner, loading spinner added at app.component.html
    this._utils.getApiResponse(apiCall).pipe(map(data => {
        return {
          ...data,
          username: 'Duong Minh Thuan'
        }
    })).subscribe(ob =>{
      this._utils.isLoading$.next(ob.isLoading);
      console.log(ob);
    });
  }

  /**
   * withLatestFrom() nhận vào tham số là 1 Observable. 
   * withLatestFrom() sẽ gộp giá trị emit của Outer Observable với giá trị gần nhất của tham số Observable thành 1 Array rồi emit Array này.
   * Different between WithLastestFrom() vs combineLatest(): Check more infomation at README.md
   */
  private exampleWithLastestFrom() {
    const outterObservable: Observable<string> =interval(1000).pipe(
      take(5),
      map(second => `outter observable ${second}`)
    );

    interval(2000).pipe(take(10), withLatestFrom(outterObservable)).subscribe(observal);

  }

  private exampleConcat() {
    // Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.
    concat( 
      interval(1000).pipe(take(3)),
      interval(500).pipe(take(5)),
    ).subscribe(observal)
  }

  private exampleRace() {
    // Race be used in NotificationToasterComponent to catch which observable will emit first
    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 1 Works",  toasterType: "success"});
    }, 1000);

    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 2 Works",  toasterType: "error"});
    }, 2000);

    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 3 Works",  toasterType: "warning"});
    }, 3000);
  }

  /** Creates an output Observable which concurrently(at the same time) emits all values from every given input Observable.
   *  The output Observable only completes once all input Observables have completed
   * */ 
  private exampleMerge() {
    const timer1 = interval(1000).pipe(take(5), map(x => `first ${x}`));
    const timer2 = interval(2000).pipe(take(5), map(x => `second ${x}`));
    const timer3 = interval(500).pipe(take(5), map(x => `thỉdrd ${x}`));
    const concurrent = 2; // This param is optional, if no three timers will run concurrently
    merge(timer1, timer2, timer3, concurrent).subscribe(observal);
  }

}
