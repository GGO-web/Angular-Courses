import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { of } from 'rxjs';

import { CourseListComponent } from './course-list.component';
import { CourseComponent } from './course/course.component';

import { DurationPipe } from './course/duration.pipe';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';

describe('CourseListComponent', () => {
   let component: CourseListComponent;
   let fixture: ComponentFixture<CourseListComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [
            CourseListComponent,
            CourseComponent,
            DurationPipe,
            OrderByPipe,
         ],
         providers: [FilterPipe],
      }).compileComponents();

      fixture = TestBed.createComponent(CourseListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should have correct length when ngFor is called', () => {
      component.courseList.subscribe((courses) => {
         expect(courses.length).toBe(3);
      });
   });

   it('should show remove item Modal when CourseComponent emit course event', () => {
      const removeCourseButton = fixture.debugElement.query(
         By.css('.courses-list__item-delete')
      );
      removeCourseButton.triggerEventHandler('click');

      const result = component.showRemoveItemModal('id #1');
      expect(result).toBe('id #1');
   });

   it('should remove item from courses list when confirm button pressed in Modal', () => {
      const removeCourseButton = fixture.debugElement.query(
         By.css('.courses-list__item-delete')
      );
      removeCourseButton.triggerEventHandler('click');

      fixture.detectChanges();

      const coursesModalDelete = fixture.debugElement.query(
         By.css('.courses-modal__delete')
      );
      coursesModalDelete.triggerEventHandler('click');

      component.filterCourseList.subscribe((items) => {
         expect(items.find((item) => item.id === 'id #1')).toBeFalsy();
      });
   });

   it('should correct filter depending on the provided search query', () => {
      component.filterByQuery('course 1');

      component.filterCourseList.subscribe((courses) => {
         expect(courses.length).toBe(1);
      });

      component.filterByQuery('course 11');

      component.filterCourseList.subscribe((courses) => {
         expect(courses.length).toBe(0);
      });
   });

   it('should detect changes of the courseList length', () => {
      component.filterCourseList = of([]);

      component.coursesService.courses = [];
      component.ngOnChanges({
         filterCourseList: new SimpleChange(null, of([]), false),
      });
      fixture.detectChanges();

      expect(component.courseListIsEmpty).toBeTrue();
   });

   it('should switch state of the courseFormModal to an opposite value', () => {
      expect(component.showedCourseForm).toBeFalse();

      component.toggleCourseForm();

      expect(component.showedCourseForm).toBeTrue();
   });
});
