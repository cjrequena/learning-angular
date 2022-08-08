import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './components/structural-directives/ngif/ngif.component';
import { NgforComponent } from './components/structural-directives/ngfor/ngfor.component';
import { NgswitchComponent } from './components/structural-directives/ngswitch/ngswitch.component';
import { ItemDetailComponent } from './components/structural-directives/ngfor/item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
