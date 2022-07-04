import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
   let component: NavComponent;
   let fixture: ComponentFixture<NavComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [NavComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should trigger Authentication service logout method when logoutHandler is called', () => {
      spyOn(component.authenticationService, 'logout');

      component.logoutHandler();
      expect(component.authenticationService.logout).toHaveBeenCalled();
   });
});
