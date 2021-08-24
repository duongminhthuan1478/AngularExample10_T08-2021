import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {

  private data = new BehaviorSubject(null);
  dataObServable = this.data.asObservable();
  
  constructor() {

  }

  nextValue(value: String) {
    this.data.next(value);
  }
}
