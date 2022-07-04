export interface CourseInterface {
   id: string;
   title: string;
   creationDate: Date;
   duration: number;
   description: string;
   authors: string[];
}

export interface User {
   token: string;
   name: string;
   email: string;
   password: string;
}

export const mockedVideoCourses: Array<CourseInterface> = [
   {
      id: 'id-1',
      title: 'Video Course 1',
      creationDate: new Date(2022, 5, 6),
      duration: 108,
      description:
         "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      authors: ['John Doe'],
   },
   {
      id: 'id-2',
      title: 'Video Course 2',
      creationDate: new Date(2022, 10, 20),
      duration: 128,
      description:
         "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      authors: ['John Doe'],
   },
   {
      id: 'id-3',
      title: 'Video Course 3',
      creationDate: new Date(),
      duration: 30,
      description:
         "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during",
      authors: ['John Doe', 'Will Smith'],
   },
];

export const fakeUser: User = {
   token: 'fake user token',
   name: 'User',
   email: 'fake user email',
   password: 'fake user password',
};

export const USER_INFO = 'userInfo';
