import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {
  SabiLoadingOverlayComponent
} from "@app/shared/sabi-components/loading-overlay/sabi-loading-overlay/sabi-loading-overlay.component";

@Directive({
  selector: '[appLoadingOverlay]'
})
export class LoadingOverlayDirective implements OnInit, OnChanges {

  @Input() appLoadingOverlay!: boolean;

  loadingComponent!: ComponentRef<SabiLoadingOverlayComponent>;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(SabiLoadingOverlayComponent);

    // create component
    this.loadingComponent = this.viewContainerRef.createComponent(factory);

    // set content of the component
    this.loadingComponent.instance.isShow = this.appLoadingOverlay;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadingComponent.instance.isShow = this.appLoadingOverlay;

  }

  ngOnInit(): void {
    this.el.nativeElement.style.position = 'relative';

    // factory comp resolver
    this.el.nativeElement.prepend(this.loadingComponent.location.nativeElement);
  }

}
