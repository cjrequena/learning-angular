import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {ICanDeactivateComponent} from "../../service/guard/can-deactivate.guard";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnChanges, ICanDeactivateComponent {

  public firstName: string;
  public lastName: string;
  public email: string;

  constructor() {
  }


  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(change);
  }

  ngOnInit(): void {
  }

  canExit = (): boolean | Observable<boolean> | Promise<boolean> => {
    if (this.firstName || this.lastName || this.email) {
      return confirm("Do you want to discard the changes?")
    } else {
      return true;
    }
  }

  processForm() {
  }


}
