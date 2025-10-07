import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appSubrayar]"
})
export class SubrayarDirective {
  @Input() appSubrayar:string = "underline";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onEnter() {
    this.renderer.setStyle(this.el.nativeElement, "textDecoration", this.appSubrayar);
  }
  @HostListener("mouseleave") onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, "textDecoration");
  }
}