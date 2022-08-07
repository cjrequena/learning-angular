import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name: string = "Child Component";
  
  @Input("parentComponentName") 
  public parentComponentName: string = null ;
  
  @Output('childComponentNameEvent')
  public childComponentNameEvent = new EventEmitter<{name: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public emitChildComponentNameEvent() {
    this.childComponentNameEvent.emit({name: this.name});
  }
}
