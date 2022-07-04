import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list/course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavComponent } from './header/nav/nav.component';
import { SearchbarComponent } from './course-list/searchbar/searchbar.component';

import { FilterPipe } from './course-list/filter.pipe';

describe('AppComponent', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [
            AppComponent,
            HeaderComponent,
            LogoComponent,
            NavComponent,
            BreadcrumbsComponent,
            SearchbarComponent,
            CourseListComponent,
            CourseComponent,
            FooterComponent,
         ],
         providers: [FilterPipe],
      }).compileComponents();
   });

   it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
   });
});
