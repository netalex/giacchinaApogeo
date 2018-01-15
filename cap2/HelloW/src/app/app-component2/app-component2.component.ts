import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-component2',
  template: `<h1>{{a+' '+testo()}} = {{1+one()}}</h1>`,
  styleUrls: ['./app-component2.component.css']
})
export class AppComponent2Component {

  a:string='Somma';
  constructor(){
    let testo=function(e:Event):string{
      return '1+1';
    }
  }

}
// cannot correct this code!!!!
