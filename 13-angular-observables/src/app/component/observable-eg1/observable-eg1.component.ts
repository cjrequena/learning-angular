import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-observable-eg1',
  templateUrl: './observable-eg1.component.html',
  styleUrls: ['./observable-eg1.component.css']
})
export class ObservableEg1Component implements OnInit, OnDestroy {

  title: string = "Default";
  subscription: Subscription = null;
  observable: Observable<any> = null;

  constructor() {
    this.observable = new Observable<any>(subscriber => {
      setTimeout(() => {
        subscriber.next(1);
      }, 1000);
      setTimeout(() => {
        subscriber.next(2);
      }, 2000);
      setTimeout(() => {
        subscriber.next(3);
      }, 3000);
      setTimeout(() => {
        subscriber.next(4);
      }, 4000);
      setTimeout(() => {
        subscriber.next(5);
      }, 5000);
      setTimeout(() => {
        subscriber.next(6);
      }, 6000);
      //setTimeout(()=>{subscriber.error(new Error('Something went wrong! Please try again later'))}, 7000)
      setTimeout(() => {
        subscriber.complete();
      }, 8000);
    });
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(
      (next) => {
        console.log("ObservableEg1Component :: value :: " + next);
        this.title = next;
      },
      (error) => {
        console.log("ObservableEg1Component :: error: " + error);
        this.title = error;
      },
      () => {
        console.log("ObservableEg1Component :: Completed");
        this.title = "Completed";
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
