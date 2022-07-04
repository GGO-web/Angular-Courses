import {
   ChangeDetectionStrategy,
   Component,
   OnChanges,
   OnInit,
   SimpleChange,
   SimpleChanges,
} from '@angular/core';
import {
   faClose,
   faPlus,
   IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { Observable, of } from 'rxjs';
import { CourseInterface } from 'src/constants';

import { CoursesService } from '../courses.service';

import { FilterPipe } from './filter.pipe';

@Component({
   selector: 'app-course-list',
   templateUrl: './course-list.component.html',
   styleUrls: ['./course-list.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit, OnChanges {
   faPlus: IconDefinition = faPlus;
   faClose: IconDefinition = faClose;

   courseList!: Observable<CourseInterface[]>;
   filterCourseList!: Observable<CourseInterface[]>;
   courseListIsEmpty: boolean = true;

   showedCourseForm: boolean = false;

   constructor(
      private filterPipe: FilterPipe,
      public coursesService: CoursesService
   ) {}

   ngOnInit() {
      this.courseList = of(this.coursesService.getList());
      this.filterCourseList = this.courseList;

      this.isEmptyCourseList();
   }

   ngOnChanges(changes: SimpleChanges) {
      this.courseList = of(this.coursesService.getList());
      this.filterCourseList = this.courseList;

      this.isEmptyCourseList();
   }

   showRemoveItemModal(courseId: string) {
      this.coursesService.courseItemIdToDelete = courseId;
      this.coursesService.courseItemDeleteModalIsShown = true;

      return courseId;
   }

   removeCourseItem() {
      const filteredCourses = this.coursesService.removeCourseById(
         this.coursesService.courseItemIdToDelete
      );

      this.closeRemoveCourseModal();

      this.ngOnChanges({
         courseList: new SimpleChange(null, of(filteredCourses), false),
      });
   }

   closeRemoveCourseModal() {
      // clear item id to remove
      this.coursesService.courseItemIdToDelete = '';

      // close modal
      this.coursesService.courseItemDeleteModalIsShown = false;
   }

   isEmptyCourseList() {
      // set courseList array length
      this.filterCourseList.subscribe((items) => {
         if (items.length === 0 && this.courseListIsEmpty === false) {
            this.courseListIsEmpty = true;
         } else if (items.length > 0 && this.courseListIsEmpty === true) {
            this.courseListIsEmpty = false;
         }
      });
   }

   filterByQuery(searchQuery: string) {
      this.filterCourseList = this.filterPipe.transform(
         this.courseList,
         searchQuery
      );
      this.isEmptyCourseList();
   }

   getRemovedItemTitle() {
      return this.coursesService.getItemById(
         this.coursesService.courseItemIdToDelete
      )?.title;
   }

   toggleCourseForm() {
      this.showedCourseForm = !this.showedCourseForm;
   }
}
