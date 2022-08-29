import {Component, OnInit} from '@angular/core';
import {Course} from "../../../model/course";
import {CourseService} from "../../../service/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.courses = this.courseService.courses;

    // this.courseService.getCourses()
    //   .then((courses) => {
    //     this.courses = courses;
    //   }).catch((error) => {
    //     console.log("An error :: " + error);
    //   });

    this.courses = this.activatedRoute.snapshot.data["courses"];
  }

}

