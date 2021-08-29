import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<string>{

  constructor(private http: HttpClient) { }

  
  
  /** case1: return string */
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
  //   return 'ABC';
  // }

  /** case2: return Observable */
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
  //   // throw new Error('Method not implemented.');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  // }

  /** case3: return Promise */
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
  //   const promise = this.http.get('https://jsonplaceholder.typicode.com/posts/').toPromise()
  //   promise.then((data)=>{
  //     console.log("Promise resolved with: " + JSON.stringify(data));
  //   }, (error)=>{
  //     console.log("Promise rejected with " + JSON.stringify(error));
  //   })
  //   return promise;
  // }

  /** case4:  Promise */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return getPromise(2);
  }

  // default case
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
  //   throw new Error('Thuan - Method not implemented.');
  // }
}

export function getPromise(value): Promise<string> {
  let promise = new Promise<string>((resolve, reject) => {
    value === 2 ? resolve('getPromise Resolve') : reject('getPromise x')
  });
  
  return promise;
}
