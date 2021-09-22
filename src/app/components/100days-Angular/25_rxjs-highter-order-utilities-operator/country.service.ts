import { delay, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LIST_COUNTRY } from 'src/app/shared/MockData/data-mock';
import { Country } from 'src/app/utils/interfaces';

@Injectable({
  providedIn: "root"
})
export class CountryService {

  constructor() { 
  }

  public getCountries(countryName?: string): Observable<Country[]> {
    return of(LIST_COUNTRY).pipe(
        delay(1500), // fake delay just like waiting api response when send request
        map(data => 
            data.filter(country => {
                if(!countryName) return true; // return full list
                return country.name.toLowerCase().startsWith(countryName)
            })
        )
    )
  }
}
