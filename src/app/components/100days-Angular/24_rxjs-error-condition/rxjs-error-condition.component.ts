import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Observable, iif, defer } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { observal, URL_GET_EARTHQUAKE } from 'src/app/utils/constants';

@Component({
  selector: 'app-rxjs-error-condition',
  templateUrl: './rxjs-error-condition.component.html'
})
export class RxjsErrorConditionComponent implements OnInit {

  constructor(
    public _utils: UtilsService, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // rxjx erorr operators
    // this.usingCatchError();

    // rxjs condition operatos
    // of('hello').pipe(delay(5000)).subscribe(observal);  //delay

    // Create operators with condition
    this.deferAndiif();
  }

  public usingCatchError() {
    this.http.get(URL_GET_EARTHQUAKE).pipe(
      catchError(err => {
        this.router.navigate(['error']);
        return this.handleError(err);
      }) // retry after call api false, total call 4(3 try and 1 first) times if api error
    )
    .subscribe(val => console.log('Api-result', val));
  }


  public usingRetry() {
    this.http.get(URL_GET_EARTHQUAKE).pipe(
      catchError(err => {
        throw new Error(err.message)
      }),
      retry(3) // retry after call api false, total call 4(3 try and 1 first) times if api error
    )
    .subscribe(observal);
  }

  public deferAndiif() {
    let userName = 'ABC';
     // Using if else by iif instead of a ? call ObserA : obserB
    iif(() => userName != null, this.observerbleA(userName), of('B-worked'));
    // Different iiff-defer: iif invoke 2 this.observerbleA(userName), of('B-worked') even though it's not subscribe
    // defer, lazy load, subscribe -> run: More detail at 19_20_rxjs-creation

    //If you need to check more than two options to choose between more than one observable, using defer
    defer(() => userName != null ? this.observerbleA(userName) : of('B-worked')).subscribe(observal)
  }

  private observerbleA(username: string) {
    if(username === null){
      throw new Error('A-has-error');
    }
    
    return of('A-worked');
  }

  private handleError(err) {
       //  return new Observable(ob =>{
    //    ob.error(err)
    //  })
    //short-handle
    return of(err);
  }
}
