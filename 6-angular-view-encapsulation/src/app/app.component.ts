import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // The default view encapsulation
  //encapsulation: ViewEncapsulation.ShadowDom //
  //encapsulation: ViewEncapsulation.None // 
})
export class AppComponent {
  title = '6-angular-view-encapsulation';
}
