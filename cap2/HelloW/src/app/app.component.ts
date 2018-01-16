import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  color2:String;
  constructor(){
    setTimeout(()=>{
      this.title='Hello World'
    }, 2000);
    setTimeout(()=>{
      this.color2='green';
    },2000);
  }
}
