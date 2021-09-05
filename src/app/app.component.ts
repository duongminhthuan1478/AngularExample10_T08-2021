import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-app';

  constructor( 
    public _utils: UtilsService,
    private cdr: ChangeDetectorRef
  ){  }

  ngOnInit(): void {
   
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
 }


}
