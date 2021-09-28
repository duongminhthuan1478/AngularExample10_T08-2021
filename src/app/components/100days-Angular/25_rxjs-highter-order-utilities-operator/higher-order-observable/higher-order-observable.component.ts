import { EarthquakeService } from './../../../../shared/services/earthquake.service';
import { observal } from './../../../../utils/constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, interval, merge, of, partition, Subject } from 'rxjs';
import { concatMap, debounceTime, startWith, switchMap, take, tap, filter, map, finalize } from 'rxjs/operators';
import { LIST_COUNTRY } from 'src/app/shared/MockData/data-mock';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Country } from 'src/app/utils/interfaces';
import { CountryService } from './../country.service';

@Component({
  selector: 'app-higher-order-observable',
  templateUrl: './higher-order-observable.component.html'
})
export class HigherOrderObservableComponent implements OnInit {
  public isShowTestSwitchMap: boolean = false;
  public isShowLoading: boolean = false;
  public isLoading = true;
  public form: FormGroup;
 
  public countries: Country[] = LIST_COUNTRY;

  constructor(
    private fb: FormBuilder,
    private _country: CountryService,
    private _utils: UtilsService,
    private _earthquake: EarthquakeService
  ) { }

  ngOnInit(): void {
  //  this.initForm();
  //  this.higherOrderObservable();
  //  this.searchWithouSwichMap();
  //  this.searchUsingSwitchMap();
  //  this.usingPartition();

  // Utility operator
  // this.tapOperator();
  this.finalizeOperator()
  }

  private searchWithouSwichMap() {
    this.isShowTestSwitchMap = true;

    this.form.controls['searchText'].valueChanges.pipe(
      debounceTime(300),
      tap((next) => this.isLoading = true),
      startWith('') // Using starWith to trigger first subscribe. So that, isLoading will be set to false

    ).subscribe(query => { // After get query user want to filter -> call api
      this._country.getCountries(query).pipe(
        tap(() => this.isLoading = false)
      ).subscribe(apiResponse => {
        this.countries = apiResponse;
      });
     
      console.log('user-input', query)
    });


    /** Recognize this code:
     * Firstly: We can see Subscribe nested -> subscribe of user input -> call api getCountries -> subscribe result api again  => thread not merge
     * Secondly: Run this app and execute input fastly:
    *      - Step 1: input v
    *      - Step 2: clear empty
    *      - Step 3: input th
     * Finnaly: Result : Exist 2 results different lead End-User frustrated, uncomfortable, If step 3 API response Error, UI still display result of step 1
     *     - 5 result of 'v' is responsed and display to UI after 1 result of 'th' responed and display to UI -> thread not merge (không đồng nhất)
     * 
     * What should we do for this case?: Using switchMap() switchMap = map() + switchAll();
     *     - SwitchMap: Understand in simple way is Convert(or merge) higher-order (here is 2nd subscribe) in to first subscribe. 
     *     Specially, switchMap will get the most recenly emitted from source. Example when user run step1 then run step3, switchAll will stop step1 and run step3 immediately
     */
  }

  // switchMap in action
  private searchUsingSwitchMap() {
    this.isShowTestSwitchMap = true;
    // this.form.controls['searchText'].valueChanges.pipe(
    //   debounceTime(300),
    //   tap((next) => this.isLoading = true),
    //   startWith(''),
    //   map(query => 
    //     this._country.getCountries(query).pipe(
    //       tap(() => this.isLoading = false)
    //     )
    //   ),
    //   switchAll()
    // ).subscribe(user => {
    //   this.countries = user;
    //   console.log('user-input', user)
    // });

    // Short-hand : switchMap = map + switchAll
    this.form.controls['searchText'].valueChanges.pipe(
      debounceTime(300),
      tap((next) => this.isLoading = true),
      startWith(''),
      switchMap(query => 
        this._country.getCountries(query).pipe(
          tap(() => this.isLoading = false)
        )
      ),
    ).subscribe(user => {
      this.countries = user;
      console.log('user-input', user)
    });
  }

  private initForm() {
    this.form = this.fb.group({
      searchText: ""
    });
  }

  // The script:  Run and execute click three times
  private higherOrderObservable() { 
    // mergeAll: 3 click will run concurrently, param is number thread will run concurrent, if passed 1 it like concat(), concatAll()
    // const ob = fromEvent(document, 'click').pipe(
    //   map(val => interval(1000).pipe(take(5))),
    //   mergeAll(2)
    // )

    // concatAll: run sequentially
    // const ob = fromEvent(document, 'click').pipe(
    //   map(val => interval(1000).pipe(take(5))),
    //   concatAll()
    // )

    // switchAll: run the mostly click. Example first click take value emitted -> click again -> switch will run click finnally and stop listen click before
    // const ob = fromEvent(document, 'click').pipe(
    //   map(val => interval(1000).pipe(take(5))),
    //   switchAll()
    // )


    // short-hand:
    // concatMap = concatAll() + map(), mergeMap = mergeAll + map() .....
    const ob = fromEvent(document, 'click').pipe(
      concatMap(val => interval(1000).pipe(take(5))),
    )

    ob.subscribe(console.log);
  }

  // partition(): Using to splits the source Observable into two, one with values that satisfy a predicate, and another with values that don't satisfy the predicate. 
  private usingPartition() {
    const ob = interval(500).pipe(take(10));
    const [rsTrue, rsFalse] = partition(ob, val => val % 2 !== 0);
    merge(
      rsTrue.pipe(map(x => `Result true value: ${x}`)),
      rsFalse.pipe(map(x => `Result false value: ${x}`)),
    ).subscribe(console.log);
  }

  /** Params: Get params like subscrie, next, error, complete
   *  Use-case:
   *     - Used to perform side-effects/ mutation(đột biến) các giá trị like object/array, push, add new properties. See below example 1
   *     - Used to log value from source anywhere. Being good for get value when debug. See below example 1
   *     - Can be used to set loading true/false. See more, at function {@link searchWithouSwichMap()}
   */
  private tapOperator() {
    // Example 1
    const user = {
      id: 111111,
      year: 1997,
      fullName: 'Duong Minh Thuan'
    }

    const ob = of(user).pipe(
      tap(user => { 
        user['gender'] = 'Male';
        console.log('Tap - Before map: ', user);
      }),
      map(user => {
        user['userName'] = 'thuanduong1478'; 
        console.log("map: ", user)
        return user;
      }),
      tap(user => {
        delete user.id
        delete user.year
        delete user.fullName
        console.log('Tap - After map: ', user);
      })
    )

    ob.subscribe(user => {
      console.log('subscribe-value', user);
    });

    // Example 2: display html
    of('Hello').pipe(
      map(x => `${x} World. My full name's Thuan`),
      tap(x => document.getElementById('tabLabel').innerHTML = `${x}. <br> Tap work`)
    ).subscribe();
  }

  private finalizeOperator() {
    // Without using finalize
    // this.isShowLoading = true;
    // this._earthquake.getEarthquakes().subscribe(res => {
    //   if(res) {
    //     this.isShowLoading = false
    //   }
    // }, (error) => {
    //   this.isShowLoading = false;
    // });

    // Using finalize: It will run despite(bất chấp) observable is complete or error
    this._earthquake.getEarthquakes().pipe(
      startWith(this.isShowLoading = true),
      finalize(() => this.isShowLoading = false)
    ).subscribe(observal)
  }
 

}
