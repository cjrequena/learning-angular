import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../model/user";

@Injectable()
export class UserService {

  constructor() {
  }

  users: User[] = [
    {
      id: "1",
      name: 'John',
      job: 'Teacher',
      gender: 'Male',
      country: 'United States',
      age: 35,
      avatar: 'assets/avatar/john.jpeg'
    } as User,
    {
      id: "2",
      name: 'Mark',
      job: 'Designer',
      gender: 'Male',
      country: 'Germany',
      age: 35,
      avatar: 'assets/avatar/mark.jpeg'
    } as User,
    {
      id: "3",
      name: 'Merry',
      job: 'Lawyer',
      gender: 'Female',
      country: 'Ireland',
      age: 35,
      avatar: 'assets/avatar/merry.jpeg'
    } as User,
    {
      id: "4",
      name: 'Steve',
      job: 'Doctor',
      gender: 'Male',
      country: 'India',
      age: 35,
      avatar: 'assets/avatar/steve.jpeg'
    } as User
  ]

  onClickUserDetailsEvent = new EventEmitter<{ name: string, job: string, gender: string, country: string, age: number, avatar: string }>();

}
