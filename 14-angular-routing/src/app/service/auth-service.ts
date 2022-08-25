import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

  private _signIn: boolean;
  private _signOut: boolean;
  private _authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _authenticated$: Observable<boolean> = this._authenticated.asObservable();

  constructor() {
  }


  signIn() {
    this._authenticated.next(true);
  }

  signOut() {
    this._authenticated.next(false);
  }

  get authenticated$(): Observable<boolean> {
    return this._authenticated$;
  }

}
