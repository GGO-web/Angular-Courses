import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseFormComponent } from './course-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
   declarations: [CourseFormComponent],
   exports: [CourseFormComponent],
   imports: [
      RouterModule.forChild([
         {
            path: '',
            component: CourseFormComponent,
         },
      ]),
      CommonModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      BreadcrumbsModule,
   ],
   providers: [],
})
export class CourseFormModule {}
