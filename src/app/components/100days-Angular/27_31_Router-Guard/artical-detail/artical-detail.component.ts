import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { Article } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-artical-detail',
  templateUrl: './artical-detail.component.html'
})
export class ArticalDetailComponent implements OnInit {
  public article: Article

  constructor(
    private route: ActivatedRoute,
    private readonly _article: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Using snapshot to get value directly
    console.log('snapshot-param', this.route.snapshot.params);
    console.log('snapshot-paramMap', this.route.snapshot.paramMap); //map
 
    // Like snapshot above but it return observable. So that, we can handle it
    this.route.paramMap.subscribe(val => console.log("paramMap", val))
    this.route.paramMap.subscribe(val => console.log("paramMap", val))
    
    this.getDetail();
  }

  public getDetail() {
    this.route.params.pipe(
      // tap(routeValue => console.log('before-pluck', routeValue)),
      pluck('slug'),
      // tap(routeValue => console.log('after-pluck', routeValue)),
      switchMap(slug => {
        if(slug && this.checkExistRecord(slug)) {  // Assumption to test no record -> go back
          return this._article.findOne(slug);;
        }
        else {
          this.router.navigate(['/day_27_28_router/articles'])
          return null;
        }
      }),
      // tap(val => console.log('after-switchMap', val))
    ).subscribe(val => this.article = val)
  }


  private checkExistRecord(slug) {
    return this._article.articles().find(x => x.slug === slug);
  }

}
