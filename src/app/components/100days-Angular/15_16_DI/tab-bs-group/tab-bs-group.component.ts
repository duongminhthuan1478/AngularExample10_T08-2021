import { Component, forwardRef, OnInit } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

const tabsBsGroupProviders = [{
  provide: TabGroupComponent,
  useExisting: forwardRef(() => TabBsGroupComponent), 
  /** 
   * Dùng forwardRef để đảm bảo TabBsGroupComponent đã được chạy xong rồi mới provider nó vào. Nếu không thì sẽ báo lỗi TabBsGroupComponent chưa defined 
   * Refer from 23:40 https://www.youtube.com/watch?v=hTsn6L8vcVg&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=16
  */

  /** Note
   * useExisting - create refrence to service (alias instance), refer here: https://stackoverflow.com/questions/45152995/useclass-vs-useexisting
   * useClass - create new instance of service, refer here: https://stackoverflow.com/questions/45152995/useclass-vs-useexisting
   * Bằng cách kế thừa từ TabGroupComponent, chúng ta có thể reuse lại được các property từ parent component để using trong component hiện tại
   * Đây là nơi tỏa sáng của DI. Bạn chỉ cần đơn giản là provide một provider để override là được.
   */
}]
@Component({
  selector: 'app-tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.scss'],
  providers: tabsBsGroupProviders
})
export class TabBsGroupComponent extends TabGroupComponent {
  constructor() {
    super();
    console.log("TabBsGroupComponent", "constructor Child");
  }
}
