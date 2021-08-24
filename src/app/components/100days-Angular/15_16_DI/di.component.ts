import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DIComponent implements OnInit {
  currentIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
