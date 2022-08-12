import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleslotComponent } from './components/singleslot/singleslot.component';
import { MultislotComponent } from './components/multislot/multislot.component';
import { NgprojectasComponent } from './components/ngprojectas/ngprojectas.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleslotComponent,
    MultislotComponent,
    NgprojectasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
