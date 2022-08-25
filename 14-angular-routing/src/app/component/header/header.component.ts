import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth-service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  authenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authenticated$ = this.authService.authenticated$;
  }

  ngOnDestroy(): void {
  }


  signIn() {
    this.authService.signIn();
  }

  signOut() {
    this.authService.signOut();
  }


}
