import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailComponent } from './component/user/user-detail/user-detail.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import {UserService} from "./service/user.service";
import {FormsModule} from "@angular/forms";
import {LoggerService} from "./service/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggerService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
