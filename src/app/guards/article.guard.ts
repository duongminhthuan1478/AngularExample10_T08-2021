import { ArticleService } from 'src/app/services/article.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuard implements CanActivate, CanActivateChild {
  constructor(private _article: ArticleService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivate-route.data', route.data);
    return of({userName: 'thuan', isOnlue: false}).pipe(map(x => !!x.userName));
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canActivateChild-route.data', route.data);
    const slug = route.params.slug; // slug of parem
    return this._article.isCanActive;
  }
  
}
