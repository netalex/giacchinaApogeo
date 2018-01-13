interface Surname{
  surname:string;
}

interface Friends extends Surname { name:string;}

let p:Friends;
p.name='Mario';
p.surname='Rossi';
