import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  // styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  /**
   * Note: Chú ý cách khai báo biến của template bên html thấy được: 
   * let-labelThuan="label"
   * let-class : $implicit được truyền vào t hì không cần gán biến cho nó
   */
  public contextButton1 = { label: 'Click here', $implicit: 'btn-primary', icon: null };
  public contextButton2 = { label: 'Delete', $implicit: 'btn-danger', icon: 'fa fa-trash-o '};

  //ngTemplateOutletContext: defined là 1 context object, nên phải khai báo context trong 1 object
  public context = { $implicit: ['Coffee', 'Milk' , 'Tea', 'Ginger', 'GongCha'] }; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
