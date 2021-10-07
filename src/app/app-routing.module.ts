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
  { path:'day_14', component: TabsComponent},                                          // ng-template, ng-container, ng-templateoutlet
  { path:'day_15_16_DI', component: DIComponent},                                      // Dependency Injection
  { path:'day_17_ContentChild', component: ContentChildComponent},                     // ContentChild, ContentChildren
  { path:'day_18_pipe', component: CustomSearchPipeComponent},
  { path:'day_19_20_rxjs', component: RxjsObservableComponent},                        // Creation Observable
  { path:'day_21_rxjs_transform_operator', component: RxjsTransformOperatorComponent}, // Transform Data Operator
  { path:'day_22_rxjs_filtering_operator', component: FilteringOperatorRxjsComponent}, // Filtering Operator
  { path:'day_23_rxjs_combination', component: RxjxCombinationComponent},              // Combination Operator
  { path:'day_24_rxjs_error_condition', component: RxjsErrorConditionComponent},       // Error and condition operators
  { path:'day_25_rxjs_hoo-utility', component: HigherOrderObservableComponent},        // Higher Order Observables, Utility Operators
  { path:'day_26_rxjs_subject', component: SubjectComponent},                          // Subject and simple multicast
  
  { path:'day_26_rxjs_multicast', component: MulticastWithCachingComponent,            // Multicast with caching data. Component nested need a router-outlet in parent
    children: [
     { path: '', pathMatch: 'full', component: DashboardComponent},
     { path: 'jokes', component: JokeListComponent}
  ]},           

  // Router + ActivatedRoute
  // Router + ActivatedRoute, slug: like a url -header article for seo
  // Day 29: Lazy module for 27_28
  { path: 'day_27_28_router', loadChildren: () => import('./components/100days-Angular/27_28_Router/article.module').then(x => x.ArticleModule)},
  

  // Error page
  { path: '**', pathMatch:'full', redirectTo:'error'},
  // { path: 'error', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
