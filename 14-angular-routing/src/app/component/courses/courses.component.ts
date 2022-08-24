import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[] = [];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courses = this.courseService.courses;
  }

}
