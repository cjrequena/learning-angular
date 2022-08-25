import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {ErrorComponent} from "./component/error/error.component";
import {Error} from "./model/error";
import {CourseComponent} from "./component/course/course.component";
import {CourseListComponent} from "./component/course/course-list/course-list.component";
import {CourseDetailComponent} from "./component/course/course-detail/course-detail.component";
import {AuthGuard} from "./service/guard/auth.guard";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {
    path: "courses",
    component: CourseComponent,
    children: [
      {path: "", component: CourseListComponent},
      {path: ":id", component: CourseDetailComponent}
    ],
    canActivateChild: [AuthGuard]
  },
  {path: 'errors/401', component: ErrorComponent, data: new Error(401, "Unauthorized")},
  {path: 'errors/404', component: ErrorComponent, data: new Error(404, "Not Found")},
  {path: 'errors/500', component: ErrorComponent, data: new Error(404, "Internal Server Error")},

  {path: '**', redirectTo: '/errors/404'}
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
