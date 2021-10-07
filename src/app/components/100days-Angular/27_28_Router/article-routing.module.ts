import { ArticalEditComponent } from './artical-edit/artical-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGuard } from 'src/app/guards/article.guard';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path:'', redirectTo: 'articles', pathMatch: 'full'},      
  { path:'articles', component: ArticleComponent, canActivate: [ArticleGuard]},
  
  { 
    path:'articles', 
    canActivateChild: [ArticleGuard], //canActivateChild: Apply for all recognise path in children below
    data: { userName: 'thuanduong', isOnline: true},
    children: [
      { path:'detail/:slug',  component: ArticalDetailComponent},
      // { path:'edit/:slug',  component: ArticalEditComponent}
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
