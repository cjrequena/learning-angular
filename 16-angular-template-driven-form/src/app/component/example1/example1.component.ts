import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  submitted = false;
  model = new User();
  hobbies = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    console.log(this.model)
    this.model.name = userForm.value.name;
    this.model.email = userForm.value.email;
    this.model.password = userForm.value.password;
    this.model.hobbies = userForm.value.hobbies;
    this.submitted=true;
    userForm.resetForm();
  }

}
