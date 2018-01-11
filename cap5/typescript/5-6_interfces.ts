interface Hello {
  name:string;
  surname:string;
}

let obj = {name:'Mario', surname:'Rossi'};

function helloWorld(obj:Hello):void{
  console.log(`ciao ${obj.name} ${obj.surname}`);
}

helloWorld(obj);

/*
$ tsc 5-6_interfces.ts
$ node 5-6_interfces.js
ciao Mario Rossi
*/
