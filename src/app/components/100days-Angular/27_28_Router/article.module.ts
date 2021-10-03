import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    ArticalDetailComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }
