import {Pipe, PipeTransform} from '@angular/core';
import {Student} from "../model/student";

@Pipe({
  name: 'customStudentFilterPipe',
  pure: true
})
export class CustomStudentFilterPipe implements PipeTransform {

  transform(students: Student[], filter: string) {
    console.log('Filter pipe called!');
    if (students.length === 0 || filter === '') {
      return students;
    } else {
      return students.filter(
        (student) => {
          return student.gender.toLowerCase() === filter.toLowerCase()
        }
      )
    }
  }

}
