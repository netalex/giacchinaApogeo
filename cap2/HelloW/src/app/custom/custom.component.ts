import { Component, Pipe, PipeTransform  } from '@angular/core';

@Component({
  selector: 'app-custom',
  template: `<div>{{name|hello:'Rossi'}}</div>`,
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  name:string='Mario'
  constructor() { }
}

@Pipe({name:'hello'})
export class HelloPipe implements PipeTransform{
  transform(name:number, args:[string]):string{
    return `Hello ${name} ${args}`;
  }
}
