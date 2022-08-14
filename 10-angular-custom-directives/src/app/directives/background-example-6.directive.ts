import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[background_6]'
})
export class BackgroundExample6Directive {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "text-center; bg-primary")
    this.renderer2.addClass(this.elementRef.nativeElement, "p-3")
    this.renderer2.setStyle(this.elementRef.nativeElement, "color", "white")
  }

}
