enum Friends {Salvo=5, Ivana, Alessandro};
let a:Friends = Friends.Salvo;
let b:Friends = Friends.Alessandro;
let c:string = Friends[6];
console.log(
  a, b, c
);

/*
$ tsc 5-3_enum.ts
$ node 5-3_enum.js
5 7
*/
