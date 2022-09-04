import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuiltinPipesComponent } from './component/builtin-pipes/builtin-pipes.component';
import {FormsModule} from "@angular/forms";
import { CustomPipesComponent } from './component/custom-pipes/custom-pipes.component';
import { CustomPercentPipe } from './pipe/custom-percent.pipe';
import {CustomUppercasePipe} from "./pipe/custom-uppercase.pipe";
import { CustomLowerCasePipe } from './pipe/custom-lower-case.pipe';
import { CustomStudentFilterPipe } from './pipe/custom-student-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinPipesComponent,
    CustomPipesComponent,
    CustomPercentPipe,
    CustomUppercasePipe,
    CustomLowerCasePipe,
    CustomStudentFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
