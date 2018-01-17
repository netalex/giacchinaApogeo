import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHelloDirective]'
})
export class HelloDirectiveDirective {

  constructor(el: ElementRef) {
    setTimeout(()=>{
      console.log(el)
      el.nativeElement.innerHTML = 'Mondo Ciao';
      el.nativeElement.style.backgroundColor = 'yellow';
    },2000)
  }

}
