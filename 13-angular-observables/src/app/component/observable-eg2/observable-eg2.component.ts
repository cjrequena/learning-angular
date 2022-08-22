import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-observable-eg2',
  templateUrl: './observable-eg2.component.html',
  styleUrls: ['./observable-eg2.component.css']
})
export class ObservableEg2Component implements OnInit, OnDestroy {

  observable: Observable<Array<any>> = null;
  subscription: Subscription = null;

  constructor() {
    const array1 = [1, 2, 6, 7, 8];
    const array2 = ['A', 'B', 'C'];
    this.observable = of( array1,array2);
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(
      (next) => {
        console.log("ObservableEg2Component :: value: " + next);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
