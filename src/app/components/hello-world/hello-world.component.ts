import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {

  fluidsetStorageObs = new BehaviorSubject<any>('');
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('superpower', 'heatvision');
    this.fluidsetStorageObs.next(localStorage.getItem('superpower'));
    this.fluidsetStorageObs.subscribe(data => {
      console.log('a', data);
    })
  }

  clearData() {
    localStorage.setItem('superpower', 'reheatvision');
    this.fluidsetStorageObs.next(localStorage.getItem('superpower'));
  }

  setData() { }

}
