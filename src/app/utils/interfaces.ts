import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export interface ApiResponse<T> {
    data: T,
    isLoading: boolean,
    error: string
}

export interface Country {
    name: string;
    code: string;
}

export interface Joke {
    id: number;
    joke: string;
    categories: Array<string>;
}
  
export interface JokeResponse {
    type: string;
    value: Array<Joke>;
}

export interface Article {
    title: string;
    body: string;
    detail: string;
    slug: string;
}

export interface ICheckDeactivate {
    checkDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | boolean;
}