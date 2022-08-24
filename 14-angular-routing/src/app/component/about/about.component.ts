import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  goToHome() {
    //this.router.navigateByUrl("home"); // localhost:4200/home
    //this.router.navigate(["home"]); // localhost:4200/home
    //this.router.navigate(["home"], {relativeTo: this.activatedRoute}); // localhost:4200/about/home
    this.router.navigate(["home"], {relativeTo: this.activatedRoute.root}); // localhost:4200/home
  }

}
