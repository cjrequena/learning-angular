import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public message: string = 'Default Message';
  public message2: string = '';


  onClick(data: HTMLInputElement) {
    this.message = data.value;
  }

  onSubmit(form: NgForm) {
    this.message2 = form.value.message;
  }
}
