import { TestBed } from '@angular/core/testing';

import { CourseInterface } from 'src/constants';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
   let service: CoursesService;

   const newCourse: CourseInterface = {
      id: 'id-1',
      title: '',
      creationDate: new Date(),
      duration: 0,
      description: '',
      authors: [],
   };

   beforeEach(() => {
      TestBed.configureTestingModule({});

      service = TestBed.inject(CoursesService);
   });

   it('should add new course when createCourse method is called', () => {
      expect(service.getList().length).toBe(3);

      service.createCourse('id #4', '', new Date(), 0, '', []);
      expect(service.getList().length).toBe(4);

      expect(service.removeCourseById('id #4'));
      expect(service.getList().length).toBe(3);
   });

   it('should update course item', () => {
      service.updateItem(newCourse);

      expect(service.courses[0]?.description).toBe('');
   });
});
