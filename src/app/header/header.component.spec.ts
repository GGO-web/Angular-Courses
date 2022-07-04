import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';

describe('HeaderComponent', () => {
   let component: HeaderComponent;
   let fixture: ComponentFixture<HeaderComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [HeaderComponent, LogoComponent, NavComponent]
      })
         .compileComponents();

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
