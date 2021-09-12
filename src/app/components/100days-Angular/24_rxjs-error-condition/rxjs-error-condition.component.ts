import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { observal, URL_GET_EARTHQUAKE } from 'src/app/utils/constants';

@Component({
  selector: 'app-rxjs-error-condition',
  templateUrl: './rxjs-error-condition.component.html'
})
export class RxjsErrorConditionComponent implements OnInit {

  constructor(
    public _utils: UtilsService, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.handleError();
  }

  private handleError() {
    this.http.get(URL_GET_EARTHQUAKE).pipe(catchError(err=> {
      return of(err)
    }))
    .subscribe(a => console.log("t", a));
  }

}
