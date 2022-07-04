import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login-page.component';

describe('LoginComponent', () => {
   let component: LoginComponent;
   let fixture: ComponentFixture<LoginComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [LoginComponent],
         providers: [FormBuilder],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should trigger Authentication service login method when form is submitted', () => {
      spyOn(component.authenticationService, 'login');

      component.submitLoginForm();

      expect(component.authenticationService.login).toHaveBeenCalled();
   });

   it('should enable login button if inputs is valid', () => {
      component.form.value.email = 'test@email.com';
      component.form.value.password = 'test';

      const buttonSubmit = fixture.debugElement.query(
         By.css('.login-form__button')
      );
      component.formChangeHandler();
      expect(buttonSubmit.nativeElement.disabled).toBeTrue();

      component.form.value.password = 'testing';

      fixture.detectChanges();

      component.formChangeHandler();
      expect(buttonSubmit.nativeElement.disabled).toBeTrue();
   });
});
