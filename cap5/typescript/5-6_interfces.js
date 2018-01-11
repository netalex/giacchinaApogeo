var obj = { name: 'Mario', surname: 'Rossi' };
function helloWorld(obj) {
    console.log("ciao " + obj.name + " " + obj.surname);
}
helloWorld(obj);
/*
$ tsc 5-6_interfces.ts
$ node 5-6_interfces.js
ciao Mario Rossi
*/
