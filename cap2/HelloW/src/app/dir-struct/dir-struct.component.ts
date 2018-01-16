import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-struct',
  template: `<h2 *ngIf="title2">{{title2}}</h2>`,
  styleUrls: ['./dir-struct.component.css']
})
export class DirStructComponent  {
  title2:String;
  constructor() {
    setTimeout(()=>{
      this.title2='Ciao Mondo';
    }, 5000);
  }
}
