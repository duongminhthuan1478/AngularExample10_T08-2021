import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  // items = Array.from({length: 10}).map((val, idx) => `Item ${idx}`);
  items = [{
    "id": 1,
    "title": "One One One"
  },
  {
    "id": 2,
    "title": "Two Two Two"
  },
  {
    "id": 3,
    "title": "Three Three Three"
  },
  {
    "id": 4,
    "title": "Four Four Four"
  },
  {
    "id": 5,
    "title": "Five Five Five"
  },
  {
    "id": 6,
    "title": "Six Six Six"
  },
  {
    "id": 7,
    "title": "Seven Seven Seven"
  },
  {
    "id": 8,
    "title": "Eight Eight Eight"
  },
  {
    "id": 9,
    "title": "Nine Nine Nine"
  },
  {
    "id": 10,
    "title": "Ten Ten Ten"
  }]

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
  }


  private moveItemInArray(array: any[], preIdx: number, currentIdx: number) {
    const fromPos = array[preIdx];
    const toPos = array[currentIdx];

    array[currentIdx] = fromPos;
    array[preIdx] = toPos;
  }

}
