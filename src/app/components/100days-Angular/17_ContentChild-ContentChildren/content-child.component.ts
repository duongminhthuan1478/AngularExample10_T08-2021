import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html'
})
export class ContentChildComponent implements OnInit {
  currentIndex = 0;

  showTab3 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
