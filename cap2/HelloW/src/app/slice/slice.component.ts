import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  template: `<div>{{arr|slice:1:4}}`,
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {
  arr:Array<number> = [1,2,3,4,5];
  constructor() { }
}
