import { Component, ElementRef } from '@angular/core';
import { NamesService } from '../names.service'

@Component({
  selector: 'app-name-user',
  templateUrl: './name-user.component.html',
  styleUrls: ['./name-user.component.css'],
  providers: [NamesService]
})
export class NameUserComponent {
  user:string;
  constructor(n:NamesService) {
    this.user=n.getHello();
  }

}
