import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html'
  // styleUrls: ['./template-outlet.component.css']
})
export class TemplateOutletComponent implements OnInit {
  counter = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
