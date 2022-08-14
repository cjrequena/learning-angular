import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[background_4]'
})
export class BackgroundExample4Directive implements OnInit {

  @Input("background_4")
  public background_4: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, "background-color", this.background_4)
  }

}
