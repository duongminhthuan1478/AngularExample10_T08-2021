import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { RoutingResolveComponent } from './components/routing-resolve/components/routing-resolve.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';
import { ExamPipePipe } from './shared/pipes/exam-pipe.pipe';
import { SpreadOperatorComponent } from './components/spread-operator/spread-operator.component';
import { FormsModule } from '@angular/forms';
import { TestReduceComponent } from './components/test-reduce/test-reduce.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { ShareAComponent } from './components/share-service/components/share-a/share-a.component';
import { ShareBComponent } from './components/share-service/components/share-b/share-b.component';
import { ShareDataService } from './components/share-service/services/share-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './components/Angular-Material/drag-and-drop/drag-and-drop.component';
import {MatSelectModule} from '@angular/material/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsComponent } from './components/100days-Angular/14_ngTemplate_ngTemplateOutlet/tabs/tabs.component';
import { TemplateOutletComponent } from './components/100days-Angular/14_ngTemplate_ngTemplateOutlet/template-outlet/template-outlet.component';
import { TabGroupComponent } from './components/100days-Angular/15_16_DI/tab-group/tab-group.component';
import { TabPanelComponent } from './components/100days-Angular/15_16_DI/tab-panel/tab-panel.component';
import { DIComponent } from './components/100days-Angular/15_16_DI/di.component';
import { ContentProjectionComponent } from './components/100days-Angular/13_content-projection/content-projection/content-projection.component';
import { MainContentProjectionComponent } from './components/100days-Angular/13_content-projection/main-content-projection/main-content-projection.component';
import { TabBsGroupComponent } from './components/100days-Angular/15_16_DI/tab-bs-group/tab-bs-group.component';
import { ContentChildComponent } from './components/100days-Angular/17_contentChild-contentChildren/content-child.component';
import { CounterComponent } from './components/100days-Angular/17_contentChild-contentChildren/counter/counter.component';
import { TabContentDirective } from './components/100days-Angular/17_contentChild-contentChildren/tab-content-directive/tab-panel-directive.directive';
import { CustomSearchPipeComponent } from './components/100days-Angular/18_custom-search-pipe/custom-search-pipe.component';
import { FilterSearchPipe } from './shared/pipes/filter-search.pipe';
import { RxjsObservableComponent } from './components/100days-Angular/19_20_rxjs-creation/rxjs-observable.component';
import { RxjsTransformOperatorComponent } from './components/100days-Angular/21_rxjs_transform-operator(Pipe)/rxjs-transform-operator.component';
import { FilteringOperatorRxjsComponent } from './components/100days-Angular/22_rxjs-filtering-operator/filtering-operator-rxjs.component';
import { TakeUntilAndTakeWhileComponent } from './components/100days-Angular/22_rxjs-filtering-operator/take-until-and-take-while/take-until-and-take-while.component';
import { RaiseLimitingComponent } from './components/100days-Angular/22_rxjs-filtering-operator/raise-limiting/raise-limiting.component';
import { NotificationToasterComponent } from './shared/components/notification-toaster/notification-toaster.component';
import { RxjxCombinationComponent } from './components/100days-Angular/23_rxjs-combination/rxjx-combination.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';

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
    MenuBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSelectModule,
    MultiSelectModule,

  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
