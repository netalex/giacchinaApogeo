import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-struct',
  templateUrl: './dir-struct.component.html',
  styleUrls: ['./dir-struct.component.css']
})
export class DirStructComponent  {
  title2:String;
  array3:Array<any> = [{number:1},{number:2},{number:3},{number:4},{number:5}];
  constructor() {
    setTimeout(()=>{
      this.title2='Ciao Mondo';
    }, 5000);
  }
}
