import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_GET_EARTHQUAKE } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  constructor(private http: HttpClient) { }

  getEarthquakes(): Observable<any> {
    return this.http.get(URL_GET_EARTHQUAKE);
  }
}
