import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {

  constructor(
    protected readonly router: Router,
    protected readonly auth: AuthService
  ) {
  }

}


