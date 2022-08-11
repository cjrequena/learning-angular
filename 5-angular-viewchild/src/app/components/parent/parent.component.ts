import { 
  Component, 
  ElementRef, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  @ViewChild("birthDateInput", { static: false }) 
  public birthDate: ElementRef;
  
  @ViewChild("ageInput", { static: false }) 
  public age: ElementRef;
  
  @ViewChild(ChildComponent, {static: true}) 
  public childComponent: ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(){
    let birthYear = new Date(this.birthDate.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }

}
