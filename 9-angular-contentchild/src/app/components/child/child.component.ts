import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterContentInit {

  @ContentChild("paragraph")
  private paragraphEl: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = "This is new paragraph value from child component using @ContentChild"
    console.log(this.paragraphEl.nativeElement.textContent);
  }

}
