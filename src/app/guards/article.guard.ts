import { ArticleService } from 'src/app/services/article.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICheckDeactivate } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<ICheckDeactivate> {
  private currentUser = {userName: null, isOnlue: false};
  constructor(private _article: ArticleService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return of(this.currentUser).pipe(map(x => !!x.userName));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('canActivate-route.data', route.data);
    return of(this.currentUser).pipe(map(x => !!x.userName));
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // console.log('canActivateChild-route.data', route.data);
    const slug = route.params.slug; // slug of parem
    return this._article.isCanActive;
  }

  canDeactivate(component: ICheckDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    const canLeave: any = component.checkDeactivate(currentRoute, currentState, nextState);
    // canLeave = false, cannot out current component, display confirm
    return canLeave || window.confirm("You need to save data. If press 'Yes' the form value will reset");
  }
  
}
