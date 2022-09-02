import {Injectable} from '@angular/core';
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _totalMarks: number = 600;
  private _students: Student[] = [
    {name: 'Mark Vought', course: 'MBA', marks: 520, dateOfBirth: new Date('11-12-1997'), gender: 'Male'} as Student,
    {name: 'Steve Smith', course: 'BTECH', marks: 420, dateOfBirth: new Date('10-06-1998'), gender: 'Male'} as Student,
    {name: 'Merry Jane', course: 'MBA', marks: 540, dateOfBirth: new Date('09-22-1996'), gender: 'Female'} as Student,
    {name: 'John Doe', course: 'BTECH', marks: 380, dateOfBirth: new Date('06-12-1995'), gender: 'Male'} as Student,
    {name: 'Sarah Smith', course: 'M.SC', marks: 430, dateOfBirth: new Date('12-21-1999'), gender: 'Female'} as Student,
    {name: 'Jonas Weber', course: 'M.SC', marks: 320, dateOfBirth: new Date('06-18-1997'), gender: 'Male'} as Student
  ];

  constructor() {
  }

  get totalMarks(): number {
    return this._totalMarks;
  }

  set totalMarks(value: number) {
    this._totalMarks = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }
}
