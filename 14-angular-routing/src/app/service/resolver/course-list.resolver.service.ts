import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Course} from "../../model/course";
import {CourseService} from "../course.service";

@Injectable({
  providedIn: 'root'
})
export class CourseListResolver implements Resolve<Course[]> {

  constructor(private courseService: CourseService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> | Promise<Course[]> {
    //return of(true);
    return this.courseService.getCourses()
      .then((data) => {
        return data;
      }).catch((error) => {
        console.log("An error " + error);
        return null;
      });
  }
}
