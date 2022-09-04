import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {BehaviorSubject, from, Observable} from "rxjs";

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  totalMarks: number;
  students: Student[];
  studentsMirror: Student[];
  private _totalStudents: BehaviorSubject<number>;
  totalStudents$:Observable<number>;

  private _filter: string = "";

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.studentsMirror = this.students;
    this._totalStudents = new BehaviorSubject(this.studentsMirror.length);
    this.totalStudents$ = this._totalStudents.asObservable();
  }

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.studentsMirror = this.filterStudentByGender(value);
    this._totalStudents.next(this.studentsMirror.length)
  }

  addDummyStudent() {
    this.students.push({
      name: 'Dummy',
      course: 'Dummy',
      marks: 520,
      dateOfBirth: new Date(),
      gender: 'Female'
    } as Student);
    this.studentsMirror = this.filterStudentByGender(this.filter);
    this._totalStudents.next(this.studentsMirror.length)
  }

  changeGender() {
    this.students[0].gender = 'Female';
    this.studentsMirror = this.filterStudentByGender(this.filter);
    this._totalStudents.next(this.studentsMirror.length)
  }

  filterStudentByGender(filterTerm: string) {
    if (this.students.length === 0 || this.filter === '') {
      return this.students;
    } else {
      return this.students.filter((student) => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase();
      })
    }
  }

}
