import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toaster } from '../components/notification-toaster/notification-toaster.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public _toastr$ = new BehaviorSubject<Toaster>(null);

  constructor() { }

  public getToaster(): Observable<Toaster> {
    return this._toastr$.asObservable();
  }

  public showToaster(toaster: Toaster) {
    this._toastr$.next(toaster);
  }
  
}


