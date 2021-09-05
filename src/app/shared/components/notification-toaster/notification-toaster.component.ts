import { Component, OnInit } from '@angular/core';
import { timer, Observable, Subject, race } from 'rxjs';
import { UtilsService } from '../../services/utils.service';
const observal = {
  next: (val) => console.log('nextValue', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete')
};
@Component({
  selector: 'app-notification-toaster',
  templateUrl: './notification-toaster.component.html',
  styleUrls: ['./notification-toaster.component.scss']
})

export class NotificationToasterComponent implements OnInit {
  public alertDismiss$ = new Subject<boolean>();
  
  showToaster = false;
  message = "Toaster Notiification works!!!"
  typeToaster: ToasterType;

  constructor(
    private _utils: UtilsService
  ) { }

  ngOnInit(): void {
    this._utils.getToaster().subscribe(toaster => {
      if(toaster) {
        // Try to hide exists toaster if multil toaster is calling
        this.showToaster = false;
        this.typeToaster = toaster.toasterType;
        this.message = toaster.message

        // Cách 1 tự đóng handleDisplayToaster và sử dụng dismiss() để đóng
        // this.handleDisplayToaster();
        // Cách 2: sử dụng combination race, race sẽ lắng nghe các subject, subject nào emit trước thì xử lý trước để đóng toaster
        // cách này có thể dễ dàng áp dụng cho các trường hợp để đóng toaster như: click x, time end, component destroy
        this.handleDisplayToaster2();
      }
    });
  }

  public dismiss(){
    // this.showToaster = false; //C1
    this.alertDismiss$.next(true); //C2 next value cho handleDisplayToaster2 xử lý
  }

  public handleDisplayToaster() {
    this.showToaster = true;
    // using timer, delay 5s -> then hide toaster
    const obserTimer: Observable<number> = timer(5000);
    obserTimer.subscribe(val => {
      this.showToaster = false;
    });
  }

  public handleDisplayToaster2() {
    this.showToaster = true;
    const dissmissCondition = [this.alertDismiss$, timer(5000)];
    race(...dissmissCondition).subscribe(val => {
      this.showToaster = false;
    });
  }
}

export interface Toaster{
  message: string,
  toasterType: ToasterType
}

export type ToasterType =  "warning" | "error" | "success" | "info";
