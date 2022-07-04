import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
   let component: BreadcrumbsComponent;
   let fixture: ComponentFixture<BreadcrumbsComponent>;

   const fakeActivatedRoute = {
      data: of({
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
      }),
      paramMap: {
         get(): string {
            return 'id-1';
         },
      },
   } as unknown as ActivatedRoute;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [BreadcrumbsComponent],
         providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      }).compileComponents();

      fixture = TestBed.createComponent(BreadcrumbsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should separate path to the View', () => {
      component.ngOnChanges();

      expect(component.breadcrumbs).toEqual([
         {
            label: 'Courses',
            url: '/courses',
         },
         {
            label: 'Edit Course',
            url: '/courses/:id',
         },
      ]);
   });
});
