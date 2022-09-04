import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-observable-eg1',
  templateUrl: './observable-eg1.component.html',
  styleUrls: ['./observable-eg1.component.css']
})
export class ObservableEg1Component implements OnInit, OnDestroy {

  title: string = "Default";
  myNumber: number = 0;
  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];

  observable1: Observable<any> = null;
  subscription1: Subscription = null;

  observable2: Observable<Array<any>> = null;
  subscription2: Subscription = null;

  observable3: Observable<number> = null;
  subscription3: Subscription = null;



  constructor() {
    this.observable1 = new Observable<any>(subscriber => {
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

    //--
    this.observable2 = of(this.array1, this.array2);

    //--
    this.observable3 = from(this.array1);

  }

  ngOnInit(): void {
    this.subscription1 = this.observable1.subscribe(
      (next) => {
        console.log("ObservableEg1Component :: value :: " + next);
        this.title = next;
      },
      (error) => {
        console.log("Observable1 :: error: " + error);
        this.title = error;
      },
      () => {
        console.log("ObservableEg1Component :: Completed");
        this.title = "Completed";
      }
    )

    //--
    this.subscription2 = this.observable2.subscribe(
      (next) => {
        console.log("Observable2 :: value: " + next);
      }
    );

    //--
    this.subscription3 = this.observable3.subscribe(
      (next) => {
        console.log("Observable3 :: value: " + next);
        this.myNumber = next;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

}
