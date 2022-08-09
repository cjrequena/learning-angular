import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  
  public currentClasses: Record<string, boolean> = {};
  public isSpecial: boolean = true;
  public canSave: boolean = true;
  public isUnchanged: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      'p-3 mb-2 bg-info text-dark':  this.isSpecial
    };
  }
}
