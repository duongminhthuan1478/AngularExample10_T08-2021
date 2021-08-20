import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-apply-bind',
  templateUrl: './call-apply-bind.component.html',
  styleUrls: ['./call-apply-bind.component.css'],
})
export class CallApplyBindComponent implements OnInit {
  person1 = { firstName: 'Jon', lastName: 'Superman' };
  person2 = { firstName: 'Kelly', lastName: 'King' };

  helloThuan = 'Hello Thuan';
  constructor() {}

  ngOnInit(): void {
    let arr = ['Hello', 'Good morning'];
    callTest.call(this);
    say.call(this.person1, 'Hello', 'Good morning');  // => Hello,Good morning Jon Superman
    //The both call & apply is the same, difference in parameter
    say.apply(this.person1, ['Hello', 'Good morning']);  // => Hello,Good morning Jon Superman

    
    const newObject = say.bind(this.person1, ...arr)
    newObject();

  
  }
}

export function say(greeting1, greeting2) {
  console.log(
    greeting1 + ',' + greeting2 + ' ' + this.firstName + ' ' + this.lastName
  );
}

export function callTest() {
  console.log('Thuan ' + this.helloThuan);
}

