import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  @ViewChild('signupForm', {static: false}) signupForm: NgForm;

  submitted = false;
  suggestedName = 'Superuser';
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  suggestUserNameEg1() {
    this.signupForm.setValue({
      userData: {
        username: this.suggestedName,
        email: ''
      },
      secret: 'pet',
      answer: '',
      gender: 'male'
    });
  }

  suggestUserNameEg2() {
    this.signupForm.form.patchValue({
      userData: {
        username: this.suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }


}

