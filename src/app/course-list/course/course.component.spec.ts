import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppModule } from 'src/app/app.module';

import { CourseComponent } from './course.component';

import { DurationPipe } from './duration.pipe';

describe('CourseComponent', () => {
   let component: CourseComponent;
   let fixture: ComponentFixture<CourseComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [CourseComponent, DurationPipe],
         providers: [AppModule],
      }).compileComponents();

      fixture = TestBed.createComponent(CourseComponent);
      component = fixture.componentInstance;

      let expectedCourse = {
         id: 'test id',
         title: 'test title',
         creationDate: new Date(2021, 11, 18),
         duration: 88,
         description: 'test description',
         authors: [],
      };
      component.course = expectedCourse;

      fixture.detectChanges();
   });

   it('should render uppercase title of course component with parent @Input', () => {
      const courseTitle = fixture.debugElement.query(
         By.css('.courses-list__item-title')
      ).nativeElement;

      expect(courseTitle.textContent.trim()).toEqual('TEST TITLE');
   });

   it('should emit course ID when remove button clicked', () => {
      const removeCourseButton = fixture.debugElement.query(
         By.css('.courses-list__item-delete')
      );

      spyOn(component.courseId, 'emit');

      removeCourseButton.triggerEventHandler('click');

      expect(component.courseId.emit).toHaveBeenCalledWith('test id');
   });

   it('should toggle topRated value when favorite button is clicked', () => {
      const favoriteButton = fixture.debugElement.query(
         By.css('.courses-list__item-favorite')
      );

      favoriteButton.triggerEventHandler('click');

      expect(component.topRated).toBeTrue();

      favoriteButton.triggerEventHandler('click');

      expect(component.topRated).toBeFalse();
   });
});
