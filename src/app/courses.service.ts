import { Injectable } from '@angular/core';

import { CourseInterface, mockedVideoCourses } from 'src/constants';

@Injectable({
   providedIn: 'root',
})
export class CoursesService {
   public courses: CourseInterface[] = mockedVideoCourses;

   courseItemDeleteModalIsShown: boolean = false;
   courseItemIdToDelete!: string;

   constructor() {}

   getList() {
      return this.courses;
   }

   createCourse(
      id: string,
      title: string,
      creationDate: Date,
      duration: number,
      description: string,
      authors: Array<string>
   ) {
      const course: CourseInterface = {
         id,
         title,
         creationDate,
         duration,
         description,
         authors,
      };

      this.courses.push(course);
   }

   getItemById(id: string) {
      return this.courses.find((course) => course.id === id);
   }

   removeCourseById(id: string) {
      this.courses = this.courses.filter((course) => course.id !== id);
   }

   updateItem(newCourse: CourseInterface) {
      this.courses = this.courses.map((course) => {
         return course.id === newCourse.id ? newCourse : course;
      });
   }
}
