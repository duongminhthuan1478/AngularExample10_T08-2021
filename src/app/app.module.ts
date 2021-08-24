import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
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