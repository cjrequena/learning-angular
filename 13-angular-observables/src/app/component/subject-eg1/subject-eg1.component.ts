import {Component, OnInit} from '@angular/core';
import {ObservableService} from "../../service/observable.service";

@Component({
  selector: 'app-subject-eg1',
  templateUrl: './subject-eg1.component.html',
  styleUrls: ['./subject-eg1.component.css']
})
export class SubjectEg1Component implements OnInit {

  message: string;

  constructor(private observableService: ObservableService) {
  }

  ngOnInit(): void {
  }

  onClick(){
    this.observableService.subjectEmitter.next(this.message);
  }

}
