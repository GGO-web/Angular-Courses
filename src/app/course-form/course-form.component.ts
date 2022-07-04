import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';
import { CourseInterface } from 'src/constants';

import { CoursesService } from '../courses.service';

import { DurationPipe } from '../course-list/course/duration.pipe';
import { of } from 'rxjs';

@Component({
   selector: 'app-course-form',
   templateUrl: './course-form.component.html',
   styleUrls: ['./course-form.component.css'],
   providers: [DurationPipe],
})
export class CourseFormComponent implements OnInit {
   @Input() courseFormTitle: string = 'New course';

   @Output() courseFormIsShowed = new EventEmitter<boolean>();

   form: FormGroup = this.fb.group({
      title: [''],
      description: [''],
      duration: [''],
      date: [''],
      authors: this.fb.array([]),
   });

   courseToEdit!: CourseInterface;

   constructor(
      private durationPipe: DurationPipe,
      public fb: FormBuilder,
      public coursesService: CoursesService,
      private route: ActivatedRoute,
      public router: Router
   ) {}

   ngOnInit(): void {
      const courseId = String(this.route.snapshot.paramMap.get('id'));

      this.courseToEdit = this.coursesService.getItemById(
         courseId
      ) as CourseInterface;

      if (this.courseToEdit) {
         this.form = this.fb.group({
            title: this.courseToEdit.title,
            description: this.courseToEdit.description,
            duration: this.courseToEdit.duration,
            date: this.courseToEdit.creationDate,
            authors: this.fb.array(this.courseToEdit.authors),
         });
      }
   }

   getFormDuration() {
      if (
         this.form.value.duration === null ||
         this.form.value.duration === ''
      ) {
         return '';
      }

      return this.durationPipe.transform(this.form.value.duration);
   }

   removeAuthor(authorName: string) {
      const filteredAuthors = this.form.value.authors.filter((author: any) => {
         return author.value
            ? author.value !== authorName
            : author !== authorName;
      });

      this.form.value.authors = filteredAuthors;

      return filteredAuthors;
   }

   addAuthor(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();

      if (value) {
         this.form.value.authors.push(value);
      }

      event.chipInput?.clear();
   }

   formSubmit(event: any) {
      event.preventDefault();

      this.courseFormIsShowed.emit(true);

      const course: CourseInterface = {
         id: this.courseToEdit ? this.courseToEdit.id : uuidv4(), // leave previous id
         title: this.form.value.title,
         description: this.form.value.description,
         duration: this.form.value.duration,
         creationDate: this.form.value.date,
         authors: this.form.value.authors,
      };

      if (this.courseToEdit) {
         this.coursesService.updateItem(course);
      } else {
         this.coursesService.createCourse(
            course.id,
            course.title,
            course.creationDate,
            course.duration,
            course.description,
            course.authors
         );
      }
   }
}
