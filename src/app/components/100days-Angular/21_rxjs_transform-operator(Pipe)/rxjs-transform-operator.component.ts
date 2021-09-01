import { Component, OnInit } from '@angular/core';
import { merge, Observable, of, BehaviorSubject } from 'rxjs';
import { delay, map, reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-transform-operator',
  templateUrl: './rxjs-transform-operator.component.html'
})

export class RxjsTransformOperatorComponent implements OnInit {
  public showOperatorMap = false;
  public showOperatorReduce = false;
  public showOperatorScan = false;
  public showOperatorReduceAndScan = false;


  public resultMapOb = {}
  public users = [
    {id: 'ddfe3653', username: 'tiepphan', firstname: 'tiep', lastname: 'phan', count: 9},
    {id: '34784716', username: 'thuanduong', firstname: 'duong', lastname: 'thuan', count: 5},
  ];

  public observal = {
    next: (val) => console.log('nextValue', val),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete')
  };

  constructor() { }

  ngOnInit(): void {
    // this.usingMap();
    // this.usingReduce();
    // this.compareReduceAndScan();
    this.usingScan();
  }

  // Using map to add new `fullname` property before return to subscribe
  private usingMap() {
    this.showOperatorMap = true;
    const ob = this.createObservable();
    ob.pipe(map(valueNext => {
      return {
        ...valueNext,
        fullname: `${valueNext.firstname} ${valueNext.lastname} 1997`
      }
    })).subscribe(result => {
      console.log('map - subscribe', result);
      this.resultMapOb = result;
    })
  }

  // Using reduce to convert array to object
  // Reduce only effect when Observable complete, check line 53.
  // This is same if using toArray(), need to Observable complete: https://rxjs.dev/api/operators/toArray
  private usingReduce() {
    this.showOperatorReduce = true;
    const ob = this.createObservable();
    // ob.subscribe(this.observal)
    let init = {};
    ob.pipe(reduce((acc, current, index) => {
      return {
        ...acc,
        [current['username']]: current
      }
    }, init)).subscribe(result => {
      console.log('reduce - subscribe', result);
      this.resultMapOb = result;
    });
  }

  private compareReduceAndScan() {
    this.showOperatorReduceAndScan = true;
    let ob = this.createObservable();
    //reduce Reduce only effect when Observable complete
    ob.pipe(reduce((acc, curent) => acc + curent.count, 0)).subscribe(this.observal);
    //scan: still calculated even though Observable no complete (scan will be calculated when Observal.next() one by one value)
    ob.pipe(scan((acc, curent) => acc + curent.count, 0)).subscribe(this.observal);
  }

  // using scan to management object state
  private usingScan() {
    this.showOperatorScan = true;
    let initialState = {};
    const stateSubject = new BehaviorSubject<object>(initialState);
    const state$ = stateSubject.asObservable().pipe(scan((acc, current)=> {
      return {
        ...acc, ...current
      }
    }));
    state$.subscribe(result => {
      console.log('reduce - subscribe', result);
      this.resultMapOb = result;
    })

    setTimeout(() => {
      initialState['name'] = 'Duong Minh Thuan';
      initialState['age'] = '25';
      stateSubject.next(initialState);
    }, 2000)

    setTimeout(() => {
      initialState['bod'] = '1997';
      stateSubject.next(initialState);
    }, 4000)
    
  }

  private createObservable(): Observable<User> {
    // Cách 1
    // return new Observable<User>(subscriber  => {
    //   setTimeout(() => {
    //     subscriber.next(this.users[0]);
    //   }, 1000)

    //   setTimeout(() => {
    //     subscriber.next(this.users[1]);
    //     subscriber.complete();
    //   }, 3000)
    // });

    // Cách 2: merge emit tung phaan tu Observabel: https://rxjs.dev/api/index/function/merge
    return merge( 
      of(this.users[0]).pipe(delay(1000)), // 1s -> next
      of(this.users[1]).pipe(delay(3000)) // 2s sau -> next
    )
  }
}

interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  count: number;
}
