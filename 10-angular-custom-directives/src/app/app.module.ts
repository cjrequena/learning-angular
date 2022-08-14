import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundExample1Directive } from './directives/background-example-1.directive';
import { BackgroundExample2Directive } from './directives/background-example-2.directive';
import { BackgroundExample3Directive } from './directives/background-example-3.directive';
import { BackgroundExample4Directive } from './directives/background-example-4.directive';
import { BackgroundExample5Directive } from './directives/background-example-5.directive';
import { BackgroundExample6Directive } from './directives/background-example-6.directive';
import { CustomClassDirective } from './directives/custom-class.directive';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundExample1Directive,
    BackgroundExample2Directive,
    BackgroundExample3Directive,
    BackgroundExample4Directive,
    BackgroundExample5Directive,
    BackgroundExample6Directive,
    CustomClassDirective,
    CustomStyleDirective,
    CustomIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
