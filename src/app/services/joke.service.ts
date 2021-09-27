import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, shareReplay, switchMap, take, takeUntil } from 'rxjs/operators';
import { Joke, JokeResponse } from '../utils/interfaces';

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10000;

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private reload$ = new Subject<void>();
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
        switchMap(() => this.requestJokes()),
        takeUntil(this.reload$), // using takeUntil to unsubscribe cached when forceReload() is executed. So that, we can new instance of cache$
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  getDataOnce() {
    return this.jokes.pipe(take(1));
  }

  forceReload() {
    // Calling next will complete the current cache instance
    this.reload$.next();

    // Setting the cache to null will create a new cache the
    // next time 'jokes' is called
    this.cache$ = null;
  }

  // Helper method to actually fetch the jokes
  private requestJokes() {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }
}
