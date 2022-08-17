import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {LoggerService} from "../../../service/logger.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private _users: User[] = [];

  constructor(private userService: UserService, private log: LoggerService) {
  }

  ngOnInit(): void {
    this._users = this.userService.users;
  }

  showUserDetails(user: User) {
    this.userService.onClickUserDetailsEvent.emit(user);
    console.log("onClickUserDetailsEvent :: Emitted")
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

}
