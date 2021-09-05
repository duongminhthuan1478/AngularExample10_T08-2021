import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Toaster } from '../components/notification-toaster/notification-toaster.component';
import { ApiResponse } from '../../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public _toastr$ = new BehaviorSubject<Toaster>(null);
  public isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getToaster(): Observable<Toaster> {
    return this._toastr$.asObservable();
  }

  public getisLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public showToaster(toaster: Toaster) {
    this._toastr$.next(toaster);
  }


  public getApiResponse<T>(apiCall: Observable<T>): Observable<ApiResponse<T>> {
    // First emits its arguments in order, and then any emissions from the source.
    // Đầu tiên subscribe sẽ nhận Emit của đối số của startWith ra trước -> sau đó mới emit data api trả về theo structure map()
    // Refer: https://rxjs.dev/api/operators/startWith
    return apiCall.pipe(
      map(data => ({isLoading: false, data, error: ''})),
      startWith({isLoading: true, data: null, error: ''}) 
    )
  }
  
}


