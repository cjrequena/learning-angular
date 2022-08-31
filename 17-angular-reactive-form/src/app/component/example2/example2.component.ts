import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../custom-validators";

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  signupForm: FormGroup;
  submitted: boolean = false;
  user = {
    userName: "",
    email: "",
    gender: "",
    hobbies: []
  };

  constructor() {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "userName": new FormControl(null,[Validators.required, CustomValidators.forbiddenNames] ),
      "email": new FormControl(null,[Validators.required, Validators.email],[CustomValidators.asyncForbiddenEmails] ),
      "hobbies": new FormArray([])
    })
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
    this.user.userName = this.signupForm.value.userName;
    this.user.email = this.signupForm.value.email;
    for (let i = 0; i < this.hobbiesControls.length; i++) {
      console.log(this.hobbiesControls[i].value); //use i instead of 0
      this.user.hobbies.push(this.hobbiesControls[i].value);
    }
    this.signupForm.reset();
  }

}
