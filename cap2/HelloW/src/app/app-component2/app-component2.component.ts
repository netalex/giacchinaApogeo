import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-component2',
  template: `<h1>{{a+' '+testo()}} = {{1+one()}}</h1>`,
  styleUrls: ['./app-component2.component.css']
})
export class AppComponent2Component {

  a:string='Somma';
  testo(e:Event):string{
    return '1+1';
  }


}


// c“annot correct this code!!!!
