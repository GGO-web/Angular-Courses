import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { CourseComponent } from './course/course.component';

import { DurationPipe } from './course/duration.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
   declarations: [
      CourseListComponent,
      SearchbarComponent,
      CourseComponent,
      DurationPipe,
      OrderByPipe,
   ],
   exports: [CourseListComponent],
   imports: [
      RouterModule.forChild([
         {
            path: '',
            component: CourseListComponent,
         },
      ]),
      CommonModule,
      FontAwesomeModule,
      BreadcrumbsModule,
      FormsModule,
      ReactiveFormsModule,
      BreadcrumbsModule,
   ],
})
export class CourseListModule {}
