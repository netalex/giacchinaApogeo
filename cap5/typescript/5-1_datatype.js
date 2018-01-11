function diff(a) {
    return a - 2;
}
var aux = 9;
var n = Math.abs(diff(aux));
console.log(n);
var p = ['Rossi', 'Ferrari', 'Bianchi'];
var p2 = ['Rossi', 'Ferrari', 'Bianchi'];
console.log(p);
console.log(p2);
//tuple (combined arrays)
var p3 = [3, "Rossi", 90, 2, 1, "Bianchi"];
console.log(p3);
/*
Alessandros-MacBook-Pro:typescript netalex$ tsc 5-1_datatype.ts
Alessandros-MacBook-Pro:typescript netalex$ node 5-1_datatype.js
7
[ 'Rossi', 'Ferrari', 'Bianchi' ]
[ 'Rossi', 'Ferrari', 'Bianchi' ]
*/
