import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  public message:string="";
  public message2:string="";


  constructor() { }

  ngOnInit(): void {
  }

  change(eventData: any){
    console.log(eventData)
    this.message2 = eventData;
  }

}
