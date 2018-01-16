import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  template: `<div>{{promise|async}}</div>`,
  styleUrls: ['./async.component.css']
})
export class AsyncComponent {
  promise:Promise<string>
  constructor() { this.promise = new Promise((resolve,reject)=>{setTimeout(()=>{resolve('Hello');},3000)}); }

  ngOnInit() {
  }

}
