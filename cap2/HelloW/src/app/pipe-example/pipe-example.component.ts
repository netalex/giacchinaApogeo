import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  template: `<div>{{now | date}}
                  {{'hello'|uppercase}}
                  {{'HELLO'|lowercase}}
                  {{10.3|currency:'EUR'}}
                  {{3.6|percent}}
            `,
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent  {
  now:Date;
  constructor() { this.now = new Date(); }
}
