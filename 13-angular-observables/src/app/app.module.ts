import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservableEg1Component } from './component/observable-eg1/observable-eg1.component';
import { SubjectEg1Component } from './component/subject-eg1/subject-eg1.component';
import {FormsModule} from "@angular/forms";
import { BehaviorSubjectEg1Component } from './component/behavior-subject-eg1/behavior-subject-eg1.component';
import { OperatorsComponent } from './component/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableEg1Component,
    SubjectEg1Component,
    BehaviorSubjectEg1Component,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
