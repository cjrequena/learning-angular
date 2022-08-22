import {Component, OnInit} from '@angular/core';
import {ObservableService} from "../../service/observable.service";

@Component({
  selector: 'app-behavior-subject-eg1',
  templateUrl: './behavior-subject-eg1.component.html',
  styleUrls: ['./behavior-subject-eg1.component.css']
})
export class BehaviorSubjectEg1Component implements OnInit {

  message: string;

  constructor(private observableService: ObservableService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.observableService.behaviorSubjectEmitter.next(this.message);
  }

}
