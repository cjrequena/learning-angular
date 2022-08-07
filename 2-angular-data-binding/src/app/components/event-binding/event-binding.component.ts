import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit(): void {}

  onClick(eventData: string) {
    this.message = eventData;
  }

  onInput(eventData: Event){
    this.message = (<HTMLInputElement>eventData.target).value;
  }
}
