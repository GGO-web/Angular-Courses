import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
   selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective {
   public hasView: boolean = false;

   constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
   ) {}

   @Input() set appIfAuthenticated(condition: boolean) {
      if (!condition && !this.hasView) {
         this.viewContainer.createEmbeddedView(this.templateRef);
         this.hasView = true;
      } else if (condition && this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
      }
   }
}
