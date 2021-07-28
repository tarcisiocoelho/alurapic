import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  //Pode receber um valor de fora, ser alterado de acordo com o uso
  @Input() brightness = '70%'
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover')
  darkenOn(){
    console.log('darkenOn');
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness}`)
  }

  @HostListener('mouseleave')
  darkenOf(){
    console.log('darkenOf');
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%')
  }

}