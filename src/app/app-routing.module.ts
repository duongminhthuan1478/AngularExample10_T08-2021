import { DragAndDropComponent } from './components/Angular-Material/drag-and-drop/drag-and-drop.component';
import { ShareAComponent } from './components/share-service/components/share-a/share-a.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { TestReduceComponent } from './components/test-reduce/test-reduce.component';
import { SpreadOperatorComponent } from './components/spread-operator/spread-operator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { RoutingResolveComponent } from './components/routing-resolve/components/routing-resolve.component';
import { AppResolverService } from './components/routing-resolve/services/app-resolver.service';
import { TabsComponent } from './components/100days-Angular/14_NgTemplate_NgTemplateOutlet/tabs/tabs.component';
import { TabGroupComponent } from './components/100days-Angular/15_16_DI/tab-group/tab-group.component';
import { DIComponent } from './components/100days-Angular/15_16_DI/di.component';
import { MainContentProjectionComponent } from './components/100days-Angular/13_Content_Projection/main-content-projection/main-content-projection.component';
import { ContentChildComponent } from './components/100days-Angular/17_ContentChild-ContentChildren/content-child.component';
import { CustomSearchPipeComponent } from './components/100days-Angular/18_custom-search-pipe/custom-search-pipe.component';
import { RxjsObservableComponent } from './components/100days-Angular/19_20_Rxjs-Creation/rxjs-observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
  { path: 'call-apply-bind', component: CallApplyBindComponent },
  { path: 'custom-pipe', component: CreatePipeComponent },
  { path: 'routing-resolve', component: RoutingResolveComponent, resolve: { appResolver: AppResolverService} },
  { path: 'spread-operator', component: SpreadOperatorComponent },
  { path: 'reduce', component: TestReduceComponent },
  { path: 'async-await', component: AsyncAwaitComponent },
  { path: 'shareService', component: ShareAComponent },
  
  //Angular material
  { path: 'drag-drop', component: DragAndDropComponent},

  //100 days 
  { path: 'day_13_ContentProjection', component: MainContentProjectionComponent},
  { path:'day_14', component: TabsComponent}, // ng-template, ng-container, ng-templateoutlet
  { path:'day_15_16_DI', component: DIComponent}, // Dependency Injection
  { path:'day_17_ContentChild', component: ContentChildComponent}, // ContentChild, ContentChildren
  { path:'day_18_pipe', component: CustomSearchPipeComponent},
  { path:'day_19_20_rxjs', component: RxjsObservableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
