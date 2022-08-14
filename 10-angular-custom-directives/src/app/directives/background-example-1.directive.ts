import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[background_1]'
})
export class BackgroundExample1Directive implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    (<HTMLDivElement>this.elementRef.nativeElement).style.background = "#5F9EA0";
  }

}
