import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentsComponent implements OnInit {
  public name: string = "Parent Component";
  public childComponentName: string = null;
  constructor() {}

  ngOnInit(): void {}

  childComponentNameEvent(eventData: { name: string }) {
    this.childComponentName = eventData.name;
  }
}
