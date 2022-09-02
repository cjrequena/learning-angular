export class Student {
  private _name: string;
  private _course: string;
  private _marks: number;
  private _dateOfBirth: Date;
  private _gender: string;

  constructor() {
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get course(): string {
    return this._course;
  }

  set course(value: string) {
    this._course = value;
  }

  get marks(): number {
    return this._marks;
  }

  set marks(value: number) {
    this._marks = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
}
