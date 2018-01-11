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
var x = [90, "Rossi"];
var test = x[1].toUpperCase();
for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
    var y = x_1[_i];
    console.log(y.toUpperCase());
}
/*
Alessandros-MacBook-Pro:typescript netalex$ tsc 5-1_datatype.ts
Alessandros-MacBook-Pro:typescript netalex$ node 5-1_datatype.js
7
[ 'Rossi', 'Ferrari', 'Bianchi' ]
[ 'Rossi', 'Ferrari', 'Bianchi' ]
[ 3, 'Rossi', 90, 2, 1, 'Bianchi' ]


$ tsc 5-1_datatype.ts
5-1_datatype.ts(22,17): error TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.
*/
