import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course";
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().then(
      (data) => {
        this.courses = data;
      }
    );
  }

}
