import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  totalMarks: number;
  students: Student[];


  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  addDummyStudent() {
    this.students.push({name: 'Dummy', course: 'Dummy', marks: 520, dateOfBirth: new Date(), gender: 'Female'} as Student);
  }

  changeGender() {
    this.students[0].gender = 'Female';
  }
}
