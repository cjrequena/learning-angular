import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservableService} from "./service/observable.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  message: string = "";
  message2: string = "";
  subjectSubscription: Subscription = null;
  behaviorSubjectSubscription: Subscription = null;

  constructor(private observableService: ObservableService) {
  }

  ngOnInit(): void {
    this.subjectSubscription = this.observableService.subject$.subscribe(
      (next) => {
        this.message = next;
      }
    );
    this.behaviorSubjectSubscription = this.observableService.behaviorSubject$.subscribe(
      (next) => {
        this.message2 = next;
      }
    )
  }

  ngOnDestroy(): void {
    this.subjectSubscription.unsubscribe();
    this.behaviorSubjectSubscription.unsubscribe();
  }


}
