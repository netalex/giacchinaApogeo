enum Friends {Salvo, Ivana, Alessandro};
let a:Friends = Friends.Salvo;
let b:Friends = Friends.Alessandro;
console.log(
  a, b
);

/*
$ tsc 5-3_enum.ts
$ node 5-3_enum.js
0 2
*/