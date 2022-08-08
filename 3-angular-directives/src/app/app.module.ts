import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './components/structural-directives/ngif/ngif.component';
import { NgforComponent } from './components/structural-directives/ngfor/ngfor.component';
import { NgswitchComponent } from './components/structural-directives/ngswitch/ngswitch.component';
import { ItemDetailComponent } from './components/structural-directives/ngfor/item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { NgmodelComponent } from './components/attribute-directives/ngmodel/ngmodel.component';
import { NgclassComponent } from './components/attribute-directives/ngclass/ngclass.component';
import { NgstyleComponent } from './components/attribute-directives/ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    ItemDetailComponent,
    NgmodelComponent,
    NgclassComponent,
    NgstyleComponent,
    NgmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
