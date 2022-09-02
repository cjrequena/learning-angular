import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuiltinPipesComponent } from './component/builtin-pipes/builtin-pipes.component';
import {FormsModule} from "@angular/forms";
import { CustomPipesComponent } from './component/custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinPipesComponent,
    CustomPipesComponent
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
