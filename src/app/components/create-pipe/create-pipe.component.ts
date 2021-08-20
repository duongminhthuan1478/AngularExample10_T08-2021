import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pipe',
  templateUrl: './create-pipe.component.html',
  styleUrls: ['./create-pipe.component.css']
})
export class CreatePipeComponent implements OnInit {

  user = {
    name : 'Thuan'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
