import { Component, OnInit } from '@angular/core';

let _count = 1;
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
    /**
   * :host is css for selector (this case is app-counter). this css effect to whole component, 
   * You can't reach the host element from inside the component  
   * Refer: https://stackblitz.com/edit/angular-host-scss-d6bwzl?file=app%2Fapp.component.ts
   */ 
})
export class CounterComponent implements OnInit {
  count = _count++;
  constructor() { }

  ngOnInit(): void {
  }

}
