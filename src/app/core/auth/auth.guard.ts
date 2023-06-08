import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {LoggedinService} from "@core/auth/logged-in.service";
import {DbLocalService} from "@core/dblocal/db-local.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private loggedInService: LoggedinService,
    private router: Router,
    private authService: AuthService,
    private db: DbLocalService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      console.log('step 1');
      console.log('this.authService.isUserLoggedIn() : ', this.authService.isUserLoggedIn());
    let url: string = state.url;
    if (this.db.get('authentication') === null) {
        this.db.save('authentication', false);
        this.db.save('header', false);
        this.db.save('footer', false);
        this.db.save('sidemenu', false);
    }

    console.log(this.db.get('authentication'));
    if (this.db.get('authentication')) {
      return true;
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([ this.authService.getLoginUrl() ]);
    return false;
  }
}


