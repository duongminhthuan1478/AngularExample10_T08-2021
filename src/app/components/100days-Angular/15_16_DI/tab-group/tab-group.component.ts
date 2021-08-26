import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  @ContentChildren(TabPanelComponent) tabPanes: QueryList<TabPanelComponent>;
  // Test between ContentChildren & ViewChildren
  // ContentChildren, ContentChild is used to get Projected Content (<ng-content></ng-content>).
  // Therefore, ViewChildren cannot get list panels passed
  // Run ..\100days-Angular\17_ContentChild-ContentChildren\content-child.component.ts for result
  @ViewChildren(TabPanelComponent) viewTabs: QueryList<TabPanelComponent>;

  constructor(
  ) {
    console.log("TabBsGroupComponent", "constructor parent");
  }

  ngOnInit(): void {
    console.log("init", this.tabPanes);
   }

  ngAfterContentInit () {
    console.log("ngAfterContentInit", this.tabPanes);
  }

  ngAfterViewInit () {
    console.log("ngAfterViewInit", this.tabPanes);
    console.log("ngAfterViewInit", this.viewTabs);
    
  }

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
