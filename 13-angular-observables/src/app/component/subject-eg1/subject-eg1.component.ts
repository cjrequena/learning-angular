import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableService} from "../../service/observable.service";
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-subject-eg1',
  templateUrl: './subject-eg1.component.html',
  styleUrls: ['./subject-eg1.component.css']
})
export class SubjectEg1Component implements OnInit, OnDestroy {

  message: string;
  subject: Subject<string> = new Subject();
  subject$: Observable<string> = this.subject.asObservable();
  subjectSubscription: Subscription;

  constructor(private observableService: ObservableService) {
    this.subject.next("Value::1");
    this.subject.next("Value::2");
    this.subject.next("Value::3");
    this.subject.next("Value::4");
    this.subject.next("Value::5");
    this.subject.next("Value::6");
  }

  ngOnInit(): void {
   this.subjectSubscription = this.subject$.subscribe(
      (next) =>{
        console.log("Subject :: " + next);
      }
    )
  }

  ngOnDestroy() {
    this.subjectSubscription.unsubscribe();
  }

  onClick(){
    this.observableService.subjectEmitter.next(this.message);
  }

}
