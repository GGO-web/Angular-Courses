import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
   faClockFour,
   faCalendarDays,
   IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

import { CourseInterface } from 'src/constants';

@Component({
   selector: 'app-course',
   templateUrl: './course.component.html',
   styleUrls: ['./course.component.css'],
})
export class CourseComponent {
   @Input() course!: CourseInterface;
   @Input() topRated: boolean = false;

   @Output() courseId = new EventEmitter<string>();

   faTime: IconDefinition = faClockFour;
   faCalendar: IconDefinition = faCalendarDays;
   faPen: IconDefinition = faPen;
   faTrash: IconDefinition = faTrash;
   faStar: IconDefinition = faStar;

   removeCourse() {
      this.courseId.emit(this.course.id);
   }

   getBorderColorOfTheFreshCourse() {
      const currentDate = new Date();
      const creationDate: Date = this.course.creationDate;

      const freshDateDaysNumber = 14;
      const courseFreshDate = new Date(
         currentDate.getFullYear(),
         currentDate.getMonth(),
         currentDate.getDate() - freshDateDaysNumber
      );

      if (creationDate < currentDate && creationDate >= courseFreshDate) {
         return 'green';
      } else if (creationDate > currentDate) {
         return 'blue';
      }

      return 'transparent';
   }

   toggleFavoriteItem() {
      this.topRated = !this.topRated;
   }
}
