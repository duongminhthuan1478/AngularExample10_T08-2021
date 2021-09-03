import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, take, takeLast } from 'rxjs/operators/';

const observal = {
  next: (val) => console.log('nextValue', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete')
};

@Component({
  selector: 'app-filtering-operator-rxjs',
  templateUrl: './filtering-operator-rxjs.component.html'
})

export class FilteringOperatorRxjsComponent implements OnInit {
  public items = [5, 22, 33, 4, 88, 6, 7];
  constructor() { }

  ngOnInit(): void {
    this.exampleFilters();
  }


  private exampleFilters() {
    // filter(), subscribe to view result
    from(this.items).pipe(filter(x => x % 2 !== 0));

    // first() with condition, throw error if Observable empty
    // Similar to last()
    from(this.items).pipe(first());
    from(this.items).pipe(first(x => x > 3));

    // find(), find out first value match with condition, it same with find in [] js
    // single(): Similar to find but strict than, if single find out more than 1 result -> error
    from(this.items).pipe(find(x => x > 5));

    //take();  take n element from start
    from(this.items).pipe(take(1)); // take(1) # first. First throw eror, take is not
    interval(1000).pipe(take(3)); 

    //takeLast()
    from(this.items).pipe(takeLast(3)); // Get last 3 element
    // error because interval not complete, cannot identify last. Using pipe(take(10), takeLast(3)) to complete Observable when take 10 element
    interval(1000).pipe(takeLast(3));

    //distinct() return values unique(not duplicate)
    from([1, 2, 1, 2, 3]).pipe(distinct()); // output => 1, 2, 3
    //distinctUntilChanged() compare latest and current value if not equals => emit.This is differ to distinct() above distinct will detect all emit
    from([1, 1, 2, 2, 3, 4]).pipe(distinctUntilChanged()); // output: 1, 2, 3, 4
    //distinctUntilKeyChanged() is short-cut of distinctUntilChanged() + keySelector: Check lastest and current
    const arr = [{ age: 4, name: 'Foo' },  { age: 6, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' }];
    from(arr).pipe(distinctUntilKeyChanged('name'))// output => { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' }
  }

  
}
