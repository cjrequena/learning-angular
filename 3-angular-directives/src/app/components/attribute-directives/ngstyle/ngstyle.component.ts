import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  public available: boolean = false;
  public canSave:boolean = true;
  public isUnchanged:boolean = true;
  public isSpecial:boolean = true;


  currentStyles: Record<string, string> = {};

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px',
      'background-color': this.isSpecial ? 'black' : 'transparent',
      'color': this.isSpecial ? 'white': ''
    };
  }

}
