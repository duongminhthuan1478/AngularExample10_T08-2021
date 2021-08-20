import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit{
  // tslint:disable-next-line: no-input-rename
  @Input('valueInput') valueInput: string;
  @Input('initValue') initValue: string;

  elementChild: ElementRef;

  constructor(elRef: ElementRef) {
    this.elementChild = elRef;
  }

  ngOnInit(): void {
    this.elementChild.nativeElement.focus();
    this.elementChild.nativeElement.style.border = '1px solid red !important';
    this.elementChild.nativeElement.style.outline = 'none !important';
    this.elementChild.nativeElement.style.color = 'red';
    console.log(this.valueInput);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementChild.nativeElement.value = this.valueInput;
    this.elementChild.nativeElement.style.border = '1px solid blue !important'
    this.elementChild.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementChild.nativeElement.value = this.initValue;
    this.elementChild.nativeElement.style.border = '1px solid red !important';
    this.elementChild.nativeElement.style.outline = 'none !important';
    this.elementChild.nativeElement.style.color = 'red';
  }

}
