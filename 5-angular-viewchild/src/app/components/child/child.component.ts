import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _message:string="A default message from a child component";

  constructor() { }

  ngOnInit(): void {
  }

  get message(){
    return this._message;
  }
}
