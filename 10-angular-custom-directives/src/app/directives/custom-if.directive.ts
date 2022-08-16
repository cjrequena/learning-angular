import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  //1. What to add or Remove
  //2. From where to add or remove
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  @Input()
  set appCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }

}
