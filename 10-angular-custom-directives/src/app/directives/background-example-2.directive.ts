import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[background_2]'
})
export class BackgroundExample2Directive implements OnInit {

  constructor(private elementRefRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.renderer2.setStyle(this.elementRefRef.nativeElement, "background-color", "#6495ED")
  }
}
