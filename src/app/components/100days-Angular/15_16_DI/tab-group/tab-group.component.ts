import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];

  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  constructor(
  ) {
    console.log("TabBsGroupComponent", "constructor parent");
  }

  ngOnInit(): void { }

  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((item, idx) => {
      if (item === tab) {
        found = idx;
        return false; //return false = delete  
      }
      return true;
    });

    
    if (found === this.activeIndex) {
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found -1 : found);
    }
  }
}
