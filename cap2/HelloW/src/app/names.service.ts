import { Injectable } from '@angular/core';
import { NAMES } from './names';

@Injectable()
export class NamesService {
  getHello():string{
    let name = NAMES[Math.floor(Math.random()*4)].name;
    return `Hello ${name}`;
  }
  constructor() { }

}
