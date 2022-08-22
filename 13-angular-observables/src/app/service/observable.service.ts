import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private _subjectEmitter = new Subject<string>();
  public subject$ = this.subjectEmitter.asObservable();

  private _behaviorSubjectEmitter = new BehaviorSubject<string>("Default");
  public behaviorSubject$ = this._behaviorSubjectEmitter.asObservable();

  constructor() { }

  public get subjectEmitter(): Subject<string>{
    return this._subjectEmitter;
  }

  get behaviorSubjectEmitter(): BehaviorSubject<string> {
    return this._behaviorSubjectEmitter;
  }
}
