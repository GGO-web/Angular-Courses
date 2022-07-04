import { Pipe, PipeTransform } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CourseInterface } from 'src/constants';

@Pipe({
   name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
   transform(
      items: Observable<CourseInterface[]>,
      field: keyof CourseInterface
   ): Observable<CourseInterface[]> {
      let orderedCourses: any[] = [];

      items.subscribe((courses) => {
         orderedCourses.push(
            ...courses.sort((a, b) => {
               return +a[field] - +b[field];
            })
         );
      });

      return of(orderedCourses);
   }
}
