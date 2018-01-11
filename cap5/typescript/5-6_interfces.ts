interface Hello {
  name:string;
  surname:string;
}

let obj = {name:'Mario', surname:123};

function helloWorld(obj:Hello):void{
  console.log(`ciao ${obj.name} ${obj.surname}`);
}

helloWorld(obj);

/*
$ tsc 5-6_interfces.ts
$ node 5-6_interfces.js
ciao Mario Rossi

$ tsc 5-6_interfces.ts
5-6_interfces.ts(12,12): error TS2345: Argument of type '{ name: string; surname: number; }' is not assignable to parameter of type 'Hello'.
  Types of property 'surname' are incompatible.
    Type 'number' is not assignable to type 'string'.
*/
