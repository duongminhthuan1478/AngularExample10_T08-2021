import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-share-b',
  templateUrl: './share-b.component.html',
  styleUrls: ['./share-b.component.css']
})
export class ShareBComponent implements OnInit {

  message = null;
  constructor(private shareService: ShareDataService) { }

  ngOnInit(): void {
    this.shareService.dataObServable.subscribe(res => {
      this.message = res || null;
    });
  }

}
