import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[MyHighLight]'
})
export class MyHighLightDirective {
@Input() color:string;
  constructor(private El:ElementRef, private r :Renderer) {

    //console.log(El);
    //El.nativeElement.style.backgroundColor='yellow';
    //r.setElementStyle(El.nativeElement,'backgroundColor','red');
  }
  @HostBinding('style.backgroundColor') hostcolor= this.color;
  
  @HostListener('mouseenter') onEnter(){
    this.hostcolor= this.color;
    //this.r.setElementStyle(this.El.nativeElement,'backgroundColor','red');
  }
  @HostListener('mouseleave') onLeave(){
    this.hostcolor='white';
    //this.r.setElementStyle(this.El.nativeElement,'backgroundColor','green');
  }
}