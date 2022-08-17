import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private _user: User = {} as User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.onClickUserDetailsEvent.subscribe((user: User) => {
      console.log("onClickUserDetailsEvent :: Received")
      this.user = user;
    })
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

}
