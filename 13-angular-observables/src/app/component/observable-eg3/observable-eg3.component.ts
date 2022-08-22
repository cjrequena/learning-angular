import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-observable-eg3',
  templateUrl: './observable-eg3.component.html',
  styleUrls: ['./observable-eg3.component.css']
})
export class ObservableEg3Component implements OnInit, OnDestroy {

  title: number = 0;
  observable: Observable<number> = null;
  subscription: Subscription = null;

  constructor() {
    const array1 = [1, 2, 6, 7, 8];
    this.observable = from(array1);
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(
      (next) => {
        console.log("ObservableEg3Component :: value: " + next);
        this.title = next;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
