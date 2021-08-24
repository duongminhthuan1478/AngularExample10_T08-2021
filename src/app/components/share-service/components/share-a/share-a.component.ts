import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-share-a',
  templateUrl: './share-a.component.html',
  styleUrls: ['./share-a.component.css']
})
export class ShareAComponent implements OnInit {
  isOpenB = false;

  constructor(
    public shareService: ShareDataService
  ) { }

  ngOnInit(): void {

  }

  openB() {
    this.isOpenB = !this.isOpenB;
    this.shareService.nextValue("ABAXThuan");
  }

}
