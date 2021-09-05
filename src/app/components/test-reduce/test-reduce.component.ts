import { Component, OnInit } from '@angular/core';
import { reduceDuplicate } from 'src/app/utils/functions';

@Component({
  selector: 'app-test-reduce',
  templateUrl: './test-reduce.component.html',
  styleUrls: ['./test-reduce.component.css']
})
export class TestReduceComponent implements OnInit {

  constructor() { }
  data = [
    {"description":"Ferry Lake","group":"Trinity","period":"Comanchean","lithologyType":"Anhydrite","country":"United States of America"},
    {"description":"Ferry Lake","group":"Trinity","period":"Comanchean","lithologyType":"Anhydrite","country":"United States of America"},
    {"description":"Zechstein Anhydrite","group":"Zechstein","period":"Permian Lower","lithologyType":"Anhydrite","country":"United Kingdom"},
    {"description":"Zechstein Anhydrite","group":"Zechstein","period":"Permian Lower","lithologyType":"Anhydrite","country":"United Kingdom"},
    {"description":"Zechstein Anhydrite","group":"Zechstein","period":"Permian Upper","lithologyType":"Anhydrite","country":"United Kingdom"},
    {"description":"Hith","group":"Carboniferous Lower","period":"Mississippian","lithologyType":"Anhydrite","country":"United Arab Emirates"},
    {"description":"Hith","group":"Carboniferous Lower","period":"Pennsylvanian","lithologyType":"Anhydrite","country":"United Arab Emirates"}];
  ngOnInit(): void {
    console.log(reduceDuplicate(this.data))
  }

}
