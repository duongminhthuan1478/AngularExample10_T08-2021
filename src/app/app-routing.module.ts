import { DragAndDropComponent } from './components/Angular-Material/drag-and-drop/drag-and-drop.component';
import { ShareAComponent } from './components/share-service/components/share-a/share-a.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { TestReduceComponent } from './components/test-reduce/test-reduce.component';
import { SpreadOperatorComponent } from './components/spread-operator/spread-operator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallApplyBindComponent } from './components/call-apply-bind/call-apply-bind.component';
import { CreatePipeComponent } from './components/create-pipe/create-pipe.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { RoutingResolveComponent } from './components/routing-resolve/components/routing-resolve.component';
import { AppResolverService } from './components/routing-resolve/services/app-resolver.service';
import { TabsComponent } from './components/100days-Angular/14_NgTemplate_NgTemplateOutlet/tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'call-apply-bind', component: CallApplyBindComponent },
  { path: 'custom-pipe', component: CreatePipeComponent },
  { path: 'routing-resolve', component: RoutingResolveComponent, resolve: { appResolver: AppResolverService} },
  { path: 'spread-operator', component: SpreadOperatorComponent },
  { path: 'reduce', component: TestReduceComponent },
  { path: 'async-await', component: AsyncAwaitComponent },
  { path: 'shareCpn', component: ShareAComponent },
  
  //Angular material
  { path: 'drag-drop', component: DragAndDropComponent},

  //100 days angular
  { path:'day_14', component: TabsComponent} // ng-template, ng-container, ng-templateoutlet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
