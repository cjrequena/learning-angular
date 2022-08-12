import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '8-angular-lifecycle-hooks';
  message: string = '';
  destroy: boolean = false;

  onSubmit(inputEl: HTMLInputElement){
    this.message = inputEl.value;
  }

  destroyComponent(){
    this.destroy = true;
  }
}
