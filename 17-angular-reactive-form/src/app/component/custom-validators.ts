import {FormControl} from '@angular/forms';
import {Observable} from "rxjs";

export class CustomValidators {


  static forbiddenNames(control: FormControl): { [s: string]: boolean } {
    const forbiddenUserNames = ["Chris", "Anna", "Test"];
    if (forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'forbidden_name': true};
    }
    return null;
  }

  static forbiddenEmails(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test@test.com") {
      return {'forbidden_email': true};
    }
    return null;
  }

  static asyncForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({"forbidden_email": true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
