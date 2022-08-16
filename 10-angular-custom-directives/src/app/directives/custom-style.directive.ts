import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @Input()
  set appCustomStyle(styles: Object) {
    let entries = Object.entries(styles);
    for (let entry of entries) {
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }

}
