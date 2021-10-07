import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentProjectionComponent } from './components/100days-Angular/13_content-projection/main-content-projection/main-content-projection.component';
import { TabsComponent } from './components/100days-Angular/14_ngTemplate_ngTemplateOutlet/tabs/tabs.component';
import { DIComponent } from './components/100days-Angular/15_16_DI/di.component';
import { ContentChildComponent } from './components/100days-Angular/17_contentChild-contentChildren/content-child.component';
import { CustomSearchPipeComponent } from './components/100days-Angular/18_custom-search-pipe/custom-search-pipe.component';
import { RxjsObservableComponent } from './components/100days-Angular/19_20_rxjs-creation/rxjs-observable.component';
import { RxjsTransformOperatorComponent } from './components/100days-Angular/21_rxjs_transform-operator(Pipe)/rxjs-transform-operator.component';
import { FilteringOperatorRxjsComponent } from './components/100days-Angular/22_rxjs-filtering-operator/filtering-operator-rxjs.component';
import { RxjxCombinationComponent } from './components/100days-Angular/23_rxjs-combination/rxjx-combination.component';
import { RxjsErrorConditionComponent } from './components/100days-Angular/24_rxjs-error-condition/rxjs-error-condition.component';
import { HigherOrderObservableComponent } from './components/100days-Angular/25_rxjs-highter-order-utilities-operator/higher-order-observable/higher-order-observable.component';
import { SubjectComponent } from './components/100days-Angular/26_1_rxjs-subject-and-mutilcast/subject/subject.component';
import { DashboardComponent } from './components/100days-Angular/26_2_multicast-with-caching/dashboard/dashboard.component';
import { JokeListComponent } from './components/100days-Angular/26_2_multicast-with-caching/joke-list/joke-list.component';
import { MulticastWithCachingComponent } from './components/100days-Angular/26_2_multicast-with-caching/multicast-with-caching.component';
import { DragAndDropComponent } from './components/Angular-Material/drag-and-drop/drag-and-drop.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { RoutingResolveComponent } from './components/routing-resolve/components/routing-resolve.component';
import { AppResolverService } from './components/routing-resolve/services/app-resolver.service';
import { ShareAComponent } from './components/share-service/components/share-a/share-a.component';
import { SpreadOperatorComponent } from './components/spread-operator/spread-operator.component';
import { TestReduceComponent } from './components/test-reduce/test-reduce.component';
import { ArticleGuard } from './guards/article.guard';

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

  //100 days Angular
  { path: 'content-projection', component: MainContentProjectionComponent},      // ng-contain
  { path:'template', component: TabsComponent},                                        // ng-template, ng-container, ng-templateoutlet
  { path:'DI', component: DIComponent},                                                // Dependency Injection
  { path:'DI/content-child', component: ContentChildComponent},                        // ContentChild, ContentChildren
  { path:'search-pipe', component: CustomSearchPipeComponent},    
  { path:'rxjs-creation', component: RxjsObservableComponent},                         //19-20: Creation Observable
  { path:'rxjs-transform-operator', component: RxjsTransformOperatorComponent},        //21: Transform Data Operator
  { path:'rxjs-filtering-operator', component: FilteringOperatorRxjsComponent},        //22: Filtering Operator
  { path:'rxjs-combination', component: RxjxCombinationComponent},                     //23: Combination Operator
  { path:'rxjs-error-condition', component: RxjsErrorConditionComponent},              //24: Error and condition operators
  { path:'rxjs-hoo-utility', component: HigherOrderObservableComponent},               //25: Higher Order Observables, Utility Operators
  { path:'rxjs-subject', component: SubjectComponent},                                 //26 Subject and simple multicast
  
  { path:'rxjs-multicast', component: MulticastWithCachingComponent,                   //27: Multicast with caching data. Component nested need a router-outlet in parent
    children: [
     { path: '', pathMatch: 'full', component: DashboardComponent},
     { path: 'jokes', component: JokeListComponent}
  ]},           

  { path: 'route-and-guard', 
    loadChildren: () => import('./components/100days-Angular/27_31_Router-Guard/article.module').then(x => x.ArticleModule),
    canLoad:[ArticleGuard] 
  },
  

  // Error page
  // { path: '**', pathMatch:'full', redirectTo:'error'},
  // { path: 'error', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
