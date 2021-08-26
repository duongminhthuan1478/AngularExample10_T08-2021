import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { TabContentDirective } from '../../17_ContentChild-ContentChildren/tab-content-directive/tab-panel-directive.directive';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {
  @Input() title: string;
  // Get template from of tab-panel.component.html
  @ViewChild(TemplateRef, {static: true}) implicitBody: TemplateRef<unknown>;
  // Get template from 17_ContentChild-ContentChildren -> content-child.component.html
  // This @decorator is using when 17_ContentChild-ContentChildren -> content-child.component.html ussing template tabContent
  @ContentChild(TabContentDirective, {static: true , read: TemplateRef}) explicitBody: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) { }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody
  }

  ngOnInit(): void {
    this.tabGroup.addTabPanel(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this);
  }

  
}
