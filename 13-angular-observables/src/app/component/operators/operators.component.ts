import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, Observable, Subscription} from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {

  observable: Observable<number> = null;
  subscription: Subscription = null;

  constructor() {
    this.observable = interval(999)
  }

  ngOnInit(): void {
    this.subscription = this.operate().subscribe((value)=>{console.log(value)})
  }

  operate(){
    return this.observable.pipe(
      filter(value => value<=100),
      map(value => value + "-filtered-then-mapped")
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
