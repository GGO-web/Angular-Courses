import { Pipe, PipeTransform } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CourseInterface } from 'src/constants';

@Pipe({
   name: 'filter',
})
export class FilterPipe implements PipeTransform {
   public transform(
      items: Observable<CourseInterface[]>,
      filterQuery: string
   ): Observable<CourseInterface[]> {
      let filteredItems!: CourseInterface[];
      items.subscribe((courses) => {
         filteredItems = courses.filter((course) =>
            RegExp(filterQuery, 'i').test(course.title)
         );
      });

      return of(filteredItems);
   }
}
