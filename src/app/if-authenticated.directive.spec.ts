import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IfAuthenticatedDirective } from './if-authenticated.directive';

@Component({
   template: `
      <section *appIfAuthenticated="isAuth">
         <p class="authentication-text">Some content</p>
      </section>

      <section *appIfAuthenticated="!isAuth">
         <p class="authentication-text">Another content</p>
      </section>
   `,
   providers: [],
})
class HostComponent {
   isAuth: boolean = false;
}

describe('IfAuthenticatedDirective', () => {
   let fixture: ComponentFixture<HostComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [IfAuthenticatedDirective, HostComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();
   });

   it('should create an instance', () => {
      const directive = IfAuthenticatedDirective;

      expect(directive).toBeTruthy();
   });

   it('should work conditional render in IfAuthenticated directive', () => {
      let elements = fixture.debugElement.queryAll(
         By.css('.authentication-text')
      );
      expect(elements.length).toBe(1);

      expect(elements[0].nativeElement.textContent).toBe('Some content');

      fixture.componentInstance.isAuth = true;
      fixture.detectChanges();

      elements = fixture.debugElement.queryAll(By.css('.authentication-text'));

      expect(elements[0].nativeElement.textContent).toBe('Another content');
   });
});
