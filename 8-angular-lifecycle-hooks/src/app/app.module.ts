import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
