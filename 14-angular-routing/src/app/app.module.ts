import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
// ---
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import {ErrorComponent} from './component/error/error.component';
import {CourseService} from "./service/course.service";
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {CourseListComponent} from './component/course/course-list/course-list.component';
import {CourseDetailComponent} from './component/course/course-detail/course-detail.component';
import {CourseComponent} from "./component/course/course.component";
import {AuthService} from "./service/auth-service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    CourseListComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
