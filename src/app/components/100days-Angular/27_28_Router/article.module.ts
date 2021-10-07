import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticleComponent } from './article/article.component';
import { ArticalEditComponent } from './artical-edit/artical-edit.component';

@NgModule({
  declarations: [
    ArticalDetailComponent,
    ArticleComponent,
    ArticalEditComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }
