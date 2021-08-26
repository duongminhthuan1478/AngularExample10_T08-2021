import { Directive } from '@angular/core';

@Directive({
  selector: '[ng-template[tabContent]' // Match <ng-temlate tabContent></ng-template>
})
export class TabContentDirective {

  constructor() { }

}
