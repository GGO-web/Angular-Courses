import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { LoginComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
   {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full',
   },
   {
      path: 'courses/new',
      loadChildren: () =>
         import('./course-form/course-form.module').then(
            (x) => x.CourseFormModule
         ),
      canActivate: [AuthGuardService],
      data: {
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
      },
   },
   {
      path: 'courses/:id',
      loadChildren: () =>
         import('./course-form/course-form.module').then(
            (x) => x.CourseFormModule
         ),
      canActivate: [AuthGuardService],
      data: {
         breadcrumb: [
            {
               label: 'Courses',
               url: '/courses',
            },
            {
               label: 'Edit Course',
               url: '/courses/:id',
            },
         ],
      },
   },
   {
      path: 'courses',
      loadChildren: () =>
         import('./course-list/course-list.module').then(
            (x) => x.CourseListModule
         ),
      canActivate: [AuthGuardService],
      data: {
         breadcrumb: [
            {
               label: 'Courses',
               url: '/courses',
            },
         ],
      },
   },
   {
      path: 'login',
      component: LoginComponent,
   },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
   declarations: [],
   imports: [
      RouterModule.forRoot(routes, {
         useHash: true,
         relativeLinkResolution: 'corrected',
      }),
      CommonModule,
   ],
   exports: [RouterModule],
})
export class AppRoutingModule {}
