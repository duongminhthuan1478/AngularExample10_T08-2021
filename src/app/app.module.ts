import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './components/100days-Angular/13_content-projection/content-projection/content-projection.component';
import { MainContentProjectionComponent } from './components/100days-Angular/13_content-projection/main-content-projection/main-content-projection.component';
import { TabsComponent } from './components/100days-Angular/14_ngTemplate_ngTemplateOutlet/tabs/tabs.component';
import { TemplateOutletComponent } from './components/100days-Angular/14_ngTemplate_ngTemplateOutlet/template-outlet/template-outlet.component';
import { DIComponent } from './components/100days-Angular/15_16_DI/di.component';
import { TabBsGroupComponent } from './components/100days-Angular/15_16_DI/tab-bs-group/tab-bs-group.component';
import { TabGroupComponent } from './components/100days-Angular/15_16_DI/tab-group/tab-group.component';
import { TabPanelComponent } from './components/100days-Angular/15_16_DI/tab-panel/tab-panel.component';
import { ContentChildComponent } from './components/100days-Angular/17_contentChild-contentChildren/content-child.component';
import { CounterComponent } from './components/100days-Angular/17_contentChild-contentChildren/counter/counter.component';
import { TabContentDirective } from './components/100days-Angular/17_contentChild-contentChildren/tab-content-directive/tab-panel-directive.directive';
import { CustomSearchPipeComponent } from './components/100days-Angular/18_custom-search-pipe/custom-search-pipe.component';
import { RxjsObservableComponent } from './components/100days-Angular/19_20_rxjs-creation/rxjs-observable.component';
import { RxjsTransformOperatorComponent } from './components/100days-Angular/21_rxjs_transform-operator(Pipe)/rxjs-transform-operator.component';
import { FilteringOperatorRxjsComponent } from './components/100days-Angular/22_rxjs-filtering-operator/filtering-operator-rxjs.component';
import { RaiseLimitingComponent } from './components/100days-Angular/22_rxjs-filtering-operator/raise-limiting/raise-limiting.component';
import { TakeUntilAndTakeWhileComponent } from './components/100days-Angular/22_rxjs-filtering-operator/take-until-and-take-while/take-until-and-take-while.component';
import { RxjxCombinationComponent } from './components/100days-Angular/23_rxjs-combination/rxjx-combination.component';
import { RxjsErrorConditionComponent } from './components/100days-Angular/24_rxjs-error-condition/rxjs-error-condition.component';
import { HigherOrderObservableComponent } from './components/100days-Angular/25_rxjs-highter-order-utilities-operator/higher-order-observable/higher-order-observable.component';
import { MulticastComponent } from './components/100days-Angular/26_1_rxjs-subject-and-mutilcast/multicast/multicast.component';
import { SubjectComponent } from './components/100days-Angular/26_1_rxjs-subject-and-mutilcast/subject/subject.component';
import { JokeListComponent } from './components/100days-Angular/26_2_multicast-with-caching/joke-list/joke-list.component';
import { MulticastWithCachingComponent } from './components/100days-Angular/26_2_multicast-with-caching/multicast-with-caching.component';
import { DragAndDropComponent } from './components/Angular-Material/drag-and-drop/drag-and-drop.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { RoutingResolveComponent } from './components/routing-resolve/components/routing-resolve.component';
import { ShareAComponent } from './components/share-service/components/share-a/share-a.component';
import { ShareBComponent } from './components/share-service/components/share-b/share-b.component';
import { ShareDataService } from './components/share-service/services/share-data.service';
import { SpreadOperatorComponent } from './components/spread-operator/spread-operator.component';
import { TestReduceComponent } from './components/test-reduce/test-reduce.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { NotificationToasterComponent } from './shared/components/notification-toaster/notification-toaster.component';
import { PageErrorComponent } from './shared/components/page-error/page-error.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';
import { ExamPipePipe } from './shared/pipes/exam-pipe.pipe';
import { FilterSearchPipe } from './shared/pipes/filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    CallApplyBindComponent,
    CreatePipeComponent,
    ExamPipePipe,
    RoutingResolveComponent,
    SpreadOperatorComponent,
    TestReduceComponent,
    AsyncAwaitComponent,
    ShareAComponent,
    ShareBComponent,
    DragAndDropComponent,
    TabsComponent,
    TemplateOutletComponent,
    TabGroupComponent,
    TabPanelComponent,
    DIComponent,
    ContentProjectionComponent,
    MainContentProjectionComponent,
    TabBsGroupComponent,
    ContentChildComponent,
    CounterComponent,
    TabContentDirective,
    CustomSearchPipeComponent,
    FilterSearchPipe,
    RxjsObservableComponent,
    RxjsTransformOperatorComponent,
    FilteringOperatorRxjsComponent,
    TakeUntilAndTakeWhileComponent,
    RaiseLimitingComponent,
    NotificationToasterComponent,
    RxjxCombinationComponent,
    MenuBarComponent,
    RxjsErrorConditionComponent,
    PageErrorComponent,
    HigherOrderObservableComponent,
    SubjectComponent,
    MulticastComponent,
    MulticastWithCachingComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSelectModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
