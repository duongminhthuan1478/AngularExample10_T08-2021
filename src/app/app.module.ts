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
import { TabsComponent } from './components/100days-Angular/14_NgTemplate_NgTemplateOutlet/tabs/tabs.component';
import { TemplateOutletComponent } from './components/100days-Angular/14_NgTemplate_NgTemplateOutlet/template-outlet/template-outlet.component';
import { TabGroupComponent } from './components/100days-Angular/15_16_DI/tab-group/tab-group.component';
import { TabPanelComponent } from './components/100days-Angular/15_16_DI/tab-panel/tab-panel.component';
import { DIComponent } from './components/100days-Angular/15_16_DI/di.component';
import { ContentProjectionComponent } from './components/100days-Angular/13_Content_Projection/content-projection/content-projection.component';
import { MainContentProjectionComponent } from './components/100days-Angular/13_Content_Projection/main-content-projection/main-content-projection.component';
import { TabBsGroupComponent } from './components/100days-Angular/15_16_DI/tab-bs-group/tab-bs-group.component';
import { ContentChildComponent } from './components/100days-Angular/17_ContentChild-ContentChildren/content-child.component';
import { CounterComponent } from './components/100days-Angular/17_ContentChild-ContentChildren/counter/counter.component';
import { TabContentDirective } from './components/100days-Angular/17_ContentChild-ContentChildren/tab-content-directive/tab-panel-directive.directive';
import { CustomSearchPipeComponent } from './components/100days-Angular/18_custom-search-pipe/custom-search-pipe.component';
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
    FilterSearchPipe
    
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
