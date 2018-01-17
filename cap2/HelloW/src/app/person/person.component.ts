import { Component } from '@angular/core';

export class Name {
  value:string;
  constructor(){
    this.value='VIncenzo';
  }
}
export class Surname {
  value:string;
  constructor(){
    this.value='Giacchina';
  }
}
export class Person{
  name:string;
  surname:string;
  costructor(){
    this.name=new Name().value;
    this.surname=new Surname().value;
  }
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[Person]
})
export class PersonComponent {
  personText:string;
  constructor(p:Person) {
    console.log(p);
  }

}
