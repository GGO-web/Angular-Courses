import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
   let component: CourseFormComponent;
   let fixture: ComponentFixture<CourseFormComponent>;

   let fakeActivatedRoute = {
      snapshot: {
         data: of({
            breadcrumb: [
               {
                  label: 'Courses',
                  url: '/courses',
               },
               {
                  label: 'New Course',
                  url: '/courses/new',
               },
            ],
         }),
         paramMap: {
            get(): string {
               return 'id-1';
            },
         },
      },
   } as unknown as ActivatedRoute;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RouterTestingModule],
         declarations: [CourseFormComponent],
         providers: [
            FormBuilder,
            { provide: ActivatedRoute, useValue: fakeActivatedRoute },
         ],
      }).compileComponents();

      fixture = TestBed.createComponent(CourseFormComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

      component.form = component.fb.group({
         title: [''],
         description: [''],
         duration: ['61'],
         date: [''],
         authors: component.fb.array([
            component.fb.control('John Doe'),
            component.fb.control('Johan Smitz'),
         ]),
      });
   });

   it('should transform duration number value to correct format using Duration Pipe', () => {
      fixture.detectChanges();

      expect(
         fixture.debugElement
            .query(By.css('.course-form__duration-parsed'))
            .nativeElement.textContent.trim()
      ).toBe('1h 01 min');

      component.form.value.duration = '';

      fixture.detectChanges();

      expect(
         fixture.debugElement
            .query(By.css('.course-form__duration-parsed'))
            .nativeElement.textContent.trim()
      ).toBeFalsy();
   });

   it('should remove author from authors list in Form Group', () => {
      const result = component.removeAuthor('John Doe');

      expect(result).toEqual(['Johan Smitz']);
   });

   it('should add author to the Form Authors list when pressed enter', () => {
      component.addAuthor({ value: 'Will Smith' } as MatChipInputEvent);

      fixture.detectChanges();

      expect(component.form.value.authors.length).toBe(3);
   });

   it('should emit event when the Course Form is sent', () => {
      const spy = spyOn(component.courseFormIsShowed, 'emit');

      component.formSubmit({ preventDefault: function () {} } as Event);

      expect(spy).toHaveBeenCalledWith(true);
   });
});
