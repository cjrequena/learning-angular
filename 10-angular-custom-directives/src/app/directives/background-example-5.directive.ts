import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[background_5]'
})
export class BackgroundExample5Directive {

  public defaultBackgroundColor: string = "#ADD8E6"

  @Input("background_5")
  public background_5: string = this.defaultBackgroundColor;

  @HostBinding('style.backgroundColor')
  public backgroundColor: string = this.background_5;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.backgroundColor = this.background_5;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

}
