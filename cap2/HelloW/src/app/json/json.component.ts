import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  template: `<div>{{obj|json}}</div><div>{{obj}}</div>`,
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
  obj:any = {name:'Mario', Surname:'Rossi'}
  constructor() { }
}
