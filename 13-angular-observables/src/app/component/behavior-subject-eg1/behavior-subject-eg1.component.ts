import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableService} from "../../service/observable.service";
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-behavior-subject-eg1',
  templateUrl: './behavior-subject-eg1.component.html',
  styleUrls: ['./behavior-subject-eg1.component.css']
})
export class BehaviorSubjectEg1Component implements OnInit, OnDestroy {

  message: string;
  behaviorSubject: BehaviorSubject<string> = new BehaviorSubject("Default");
  behaviorSubject$: Observable<string> = this.behaviorSubject.asObservable();
  behaviorSubjectSubscription: Subscription;


  constructor(private observableService: ObservableService) {
    this.behaviorSubject.next("Value::1");
    this.behaviorSubject.next("Value::2");
    this.behaviorSubject.next("Value::3");
    this.behaviorSubject.next("Value::4");
    this.behaviorSubject.next("Value::5");
    this.behaviorSubject.next("Value::6");
  }

  ngOnInit(): void {
    this.behaviorSubjectSubscription =  this.behaviorSubject$.subscribe(
      (next) =>{
        console.log("BehaviorSubject :: " + next);
      }
    )
  }

  ngOnDestroy() {
    this.behaviorSubject.unsubscribe();
  }

  onClick() {
    this.observableService.behaviorSubjectEmitter.next(this.message);
  }

}
