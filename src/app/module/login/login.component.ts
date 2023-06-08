import { Component } from '@angular/core';
import {AuthService} from "@core/auth/auth.service";
import {Router} from "@angular/router";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidCredentialMsg!: string;
  constructor(private authService: AuthService, private router: Router) {
      console.log('step 2');
  }

  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(),
    password: new UntypedFormControl()
  });

  onFormSubmit() {
      console.log('step 3');
    let uname = this.loginForm.get('username')!.value;
    let pwd = this.loginForm.get('password')!.value;
    this.authService.isUserAuthenticated(uname, pwd).subscribe(
      authenticated => {
          console.log('outside authenticated')
        if(authenticated) {
            window.localStorage
            console.log('inside if authenticated')
          let url =  this.authService.getRedirectUrl();
          console.log('Redirect Url:'+ url);
          this.router.navigate([ url ]);
        } else {
          this.invalidCredentialMsg = 'Username atau Password salah. Coba lagi.';
        }
      }
    );
  }
}
