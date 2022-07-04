import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
   selector: 'app-login-page',
   templateUrl: './login-page.component.html',
   styleUrls: ['./login-page.component.css'],
})
export class LoginComponent {
   public formIsValid = true;

   form: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   });

   constructor(
      public authenticationService: AuthenticationService,
      public fb: FormBuilder
   ) {}

   submitLoginForm() {
      this.authenticationService.login();
   }

   formChangeHandler() {
      const loginButton = document.querySelector('.login-form__button');

      this.formIsValid = this.form.valid;

      if (this.formIsValid) {
         loginButton?.removeAttribute('disabled');
      } else {
         loginButton?.setAttribute('disabled', 'true');
      }
   }
}
