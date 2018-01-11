var obj = { name: 'Mario', surname: 'brambilla' };
var obj2 = { name: 'Madonna' };
var helloWorld = function (obj) {
    console.log("ciao " + obj.name);
};
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
*/
