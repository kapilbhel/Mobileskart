import { 
    ElementRef,
    ViewContainerRef,
    TemplateRef,
    Directive, 
    Input, 
    OnInit,
  OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') appHighlight

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight; 
  }
}

@Directive({
  selector: '[appNgIf]'
})
export class AppNgIfDirective {

  hasView = false;

  @Input('appNgIf') set appNgIf(condition: boolean) {
    if (condition && !this.hasView ) {
      this.container.createEmbeddedView(this.template);
      this.hasView = true;
    } else if (!condition && this.hasView ) {
      this.container.clear();
      this.hasView = false;
    }
  };

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {}
}

@Directive({
  selector: '[appNgFor]'
})
export class AppNgForDirective implements OnChanges {

  @Input('appNgForOf') appNgForOf: Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {}

  ngOnChanges() {
    this.appNgForOf.forEach(value => {
      debugger
      this.container.createEmbeddedView(this.template, { $implicit: value}); 
    })
  }
}