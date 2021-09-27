import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastRoutingModule } from './multicast-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MulticastWithCachingComponent } from './multicast-with-caching.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokeListComponent } from './joke-list/joke-list.component';


@NgModule({
  declarations: [   
    MulticastWithCachingComponent,
    DashboardComponent,
    JokeListComponent,
  ],
  imports: [
    CommonModule,
    MulticastRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class MulticastModule { }
