import { Injectable } from '@angular/core';
import { NAMES } from './names';
import { SurnameService } from './surname.service'

@Injectable()
export class NamesService {
  name:string;
  surname:string;
  getHello():string{
    let name = NAMES[Math.floor(Math.random()*4)].name;
    return `Hello ${name} ${this.surname}`;
  }
  constructor(s:SurnameService) {
    this.surname=s.surname;
    alert(2+' ./names.service.ts');
  }

}
