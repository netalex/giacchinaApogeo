import { Injectable } from '@angular/core';

@Injectable()
export class SurnameService {
  surname:string='Rossi';
  constructor() {
    alert(1+' ./surname.service.ts');
  }

}
