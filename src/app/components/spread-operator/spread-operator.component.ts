import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread-operator',
  templateUrl: './spread-operator.component.html',
  styleUrls: ['./spread-operator.component.css']
})
export class SpreadOperatorComponent implements OnInit {

  result;
  result2;
  pageLoaded = true;
  rsObject1;
  rsObject2;

  constructor() { }

  ngOnInit(): void {
    let album1 = ["Tình thôi xót xa", "Sài Gòn lụt", "Cơn mưa tình yêu", "ABCD"]
    let album2 = ["Sót xa"]
    this.result = [...album1, "Sót xa"].join(', ');
    this.result2 = ["Thuan", ...album2].join(', ');

    console.log(this.result)
    console.log(say('hello', 'world'));

    // Copy object & edit value of fullname prototype
    const object1 = {
      fullName: 'Anonystick',
      occupation: 'Software developer',
      age: 31,
      website: 'https://anonystick.com'
    };
    const object2 = {...object1, fullName: 'Thuan-Duong-Minh'};
    this.rsObject1 = JSON.stringify(object1);
    this.rsObject2 = JSON.stringify(object2);
  }
}

function say(...messages) {
  return messages;
}
