import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-share-a',
  templateUrl: './share-a.component.html',
  styleUrls: ['./share-a.component.css']
})
export class ShareAComponent implements OnInit {

  constructor(private shareService: ShareDataService) { }
  isOpenB = false;
  ngOnInit(): void {
    
  }

  openB() {
    this.isOpenB = !this.isOpenB;
    this.shareService.nextValue("ABAXThuan");
  }

}
