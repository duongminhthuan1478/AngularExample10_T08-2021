import { Toaster } from './../../../shared/components/notification-toaster/notification-toaster.component';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-rxjx-combination',
  templateUrl: './rxjx-combination.component.html',
  styleUrls: ['./rxjx-combination.component.scss']
})
export class RxjxCombinationComponent implements OnInit {

  constructor(public _utils: UtilsService) { }

  ngOnInit(): void {
   
    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 1 Works",  toasterType: "success"});
    }, 1000);

    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 2 Works",  toasterType: "error"});
    }, 2000);

    setTimeout(() => {
      this._utils.showToaster({message: "Toaster 3 Works",  toasterType: "warning"});
    }, 3000);
    

  }

}
