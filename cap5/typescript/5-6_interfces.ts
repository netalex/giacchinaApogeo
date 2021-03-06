interface Hello {
  name:string;
  surname?:string;
}

interface Fhello {
  (obj:Hello):void;
}

let obj = {name:'Mario', surname:'brambilla'};
let obj2 = {name:'Madonna'}

let helloWorld:Fhello = function(obj:Hello):void{
  console.log(`ciao ${obj.name}`)
}

helloWorld(obj);
helloWorld(obj2);
/*
$ tsc 5-6_interfces.ts
$ node 5-6_interfces.js
ciao Mario Rossi

$ tsc 5-6_interfces.ts
5-6_interfces.ts(12,12): error TS2345: Argument of type '{ name: string; surname: number; }' is not assignable to parameter of type 'Hello'.
  Types of property 'surname' are incompatible.
    Type 'number' is not assignable to type 'string'.

    $ node 5-6_interfces.js
    ciao Mario brambilla
    ciao Madonna undefined

    $ node 5-6_interfces.js
ciao Mario
ciao Madonna
*/
