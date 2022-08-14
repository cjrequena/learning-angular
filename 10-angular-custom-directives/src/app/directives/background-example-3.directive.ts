import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[background_3]'
})
export class BackgroundExample3Directive implements OnInit {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.setAttribute(this.elementRef.nativeElement, "style", "color: white; background: #2F4F4F")
  }

}
