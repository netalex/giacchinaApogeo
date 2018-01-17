import { Component, ElementRef } from '@angular/core';
import { NamesService } from '../names.service';
import { SurnameService } from '../surname.service';

@Component({
  selector: 'app-name-user',
  templateUrl: './name-user.component.html',
  styleUrls: ['./name-user.component.css'],
  providers: [NamesService, SurnameService]
})
export class NameUserComponent {
  user:string;
  constructor(n:NamesService) {
    alert(3+' ./name-user.component.ts');
    this.user=n.getHello();
  }

}

@Component({
  selector: 'child-name-user',
  template:'<p>bye!</p>',
  providers:[SurnameService]
})
export class ChildNameUser {
  constructor(s:SurnameService){
    alert(4+' child name user');
    console.log(s);
  }
}
