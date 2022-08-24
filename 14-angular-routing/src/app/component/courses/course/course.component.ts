import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../model/course";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  id: number;
  course: Course;
  editable: boolean;
  paramMapSubscription: Subscription;
  queryParamMapSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {
  }

  ngOnInit(): void {
    // =================
    // Using snapshot
    // =================
    //this.id = +this.activatedRoute.snapshot.params['id']; // old approach
    //this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    //this.course = this.courseService.courses.find((element) => element.id === this.id);

    // The code bellow won't work unless the component receive the edit queryParam from courses component.
    // in this case it is needed an observable approach.
    //this.editable = this.activatedRoute.snapshot.queryParams["edit"] // old approach
    //this.id = +this.activatedRoute.snapshot.paramMap.get("id");

    // =================
    // Using observables
    // =================
    this.paramMapSubscription = this.activatedRoute.paramMap.subscribe((parameters) => {
      this.id = +parameters.get("id");
      this.course = this.courseService.courses.find((element) => element.id === this.id);
    });
    this.queryParamMapSubscription = this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      const edit = queryParams.get("edit") ?? "false";
      this.editable = edit.toLocaleLowerCase() === 'true' ? true : false;
    });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe();
    this.queryParamMapSubscription.unsubscribe();
  }

  // Adding query params programmatically
  addQueryParams() {
    this.router.navigate(["/courses", this.id], {queryParams: {"edit": false}})
  }
}
