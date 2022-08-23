import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {CoursesComponent} from "./component/courses/courses.component";
import {ErrorComponent} from "./component/error/error.component";
import {Error} from "./model/error";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "courses", component: CoursesComponent},
  { path: 'not-found', component: ErrorComponent, data: new Error(404, "Not Found")},
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
