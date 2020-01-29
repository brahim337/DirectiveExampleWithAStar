import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appSternMakeItBig]"
})
export class SternMakeItBigDirective {
  @Input("appSternMakeItBig") set show(makeItBig: boolean) {
    if (makeItBig) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log(templateRef);
    console.log(viewContainerRef);
  }
}
