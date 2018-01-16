import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-example',
  template:'<div>{{now}}</div>',
  styleUrls: ['./date-example.component.css']
})
export class DateExampleComponent  {
  now:Date;
  constructor() { this.now = new Date(); }
}
