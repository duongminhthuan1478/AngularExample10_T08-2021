import { MulticastWithCachingComponent } from './multicast-with-caching.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [  {
  path: '',
    component: MulticastWithCachingComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'jokes', component: JokeListComponent }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MulticastRoutingModule { }
