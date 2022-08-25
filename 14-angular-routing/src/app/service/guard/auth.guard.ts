import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from "../auth-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return this.authService.authenticated$;
    return this.authService.authenticated$.pipe(
      map(element => {
        if (element) {
          return true;
        } else {
          this.router.navigate(['errors/401']).then(r => {});
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['errors/500']).then(r => {});
        return of(false);
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

}
