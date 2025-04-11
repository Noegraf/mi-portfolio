
import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          this.renderer.addClass(this.el.nativeElement, 'animate-in');
          this.renderer.removeClass(this.el.nativeElement, 'animate-out');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'animate-in');
          this.renderer.addClass(this.el.nativeElement, 'animate-out');
        }
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }



}
