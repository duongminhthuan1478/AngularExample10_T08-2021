import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path:'', redirectTo: 'articles', pathMatch: 'full'},      
  { path:'articles/detail/:slug', component: ArticalDetailComponent},     
  { path:'articles', component: ArticleComponent},    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
