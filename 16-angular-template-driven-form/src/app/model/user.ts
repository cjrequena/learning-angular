export class User {

  private _name: string;
  private _email: string;
  private _password: string;
  private _hobbies: string;

  constructor() {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get hobbies(): string {
    return this._hobbies;
  }

  set hobbies(value: string) {
    this._hobbies = value;
  }
}
