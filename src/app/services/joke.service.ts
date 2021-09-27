import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Joke, JokeResponse } from '../utils/interfaces';

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private cache$: Observable<Array<Joke>>;

  constructor(private http: HttpClient) { }

  get jokes() {
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each tick we make an http request to fetch new data
      // We use shareReplay(X) to multicast the cache so that all 
      // subscribers share one underlying source and don't re-create 
      // the source over and over again
      this.cache$ = timer$.pipe(
        switchMap(_ => this.requestJokes()), // API random
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  // Helper method to actually fetch the jokes
  private requestJokes() {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }
}
