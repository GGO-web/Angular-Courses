import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BreadcrumbInterface } from './breadcrumbs.types';

@Component({
   selector: 'app-breadcrumbs',
   templateUrl: './breadcrumbs.component.html',
   styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
   @Input() path: string = 'courses';

   breadcrumbs: Array<BreadcrumbInterface> = [];

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.separatePath();
   }

   ngOnChanges(): void {
      this.separatePath();
   }

   separatePath() {
      const breadcrumbLinks: any = [];

      this.route.data.subscribe((data) => {
         data['breadcrumb']?.forEach((breadcrumb: any) => {
            breadcrumbLinks.push(breadcrumb);
         });
      });

      this.breadcrumbs = breadcrumbLinks;
   }
}
