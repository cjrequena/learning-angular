import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;
  genders = ['male', 'female'];
  forbiddenUserNames = ["Chris", "Anna", "Test"];
  user = {
    username: "",
    email: "",
    gender: "",
    hobbies: []
  };

  constructor() {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)], null),
        "email": new FormControl(null, [Validators.required, Validators.email], this.asyncForbiddenEmails.bind(this))
        //"username": new FormControl(null, [Validators.required, CustomValidators.forbiddenNames], null),
        //"email": new FormControl(null, [Validators.required, Validators.email], [CustomValidators.asyncForbiddenEmails])

      }),
      "gender": new FormControl("male"),
      "hobbies": new FormArray([])

    });
  }

  get hobbiesControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    for (let i = 0; i < this.hobbiesControls.length; i++) {
      //console.log(this.hobbiesControls[i].value); //use i instead of 0
      this.user.hobbies.push(this.hobbiesControls[i].value);
    }
    this.signupForm.reset();
  }

  // Validators
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'forbidden_name': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test@test.com") {
      return {'forbidden_email': true};
    }
    return null;
  }

  asyncForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'forbidden_email': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
