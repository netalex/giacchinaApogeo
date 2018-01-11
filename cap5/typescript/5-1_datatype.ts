function diff(a:any):number{
  return a-2;
}
let aux:number=9;

let n = Math.abs(diff(aux));
console.log(n);

let p:string[] = ['Rossi','Ferrari','Bianchi'];
let p2:Array<string>=['Rossi','Ferrari','Bianchi'];
console.log(p);
console.log(p2);

//tuple (combined arrays)

let p3:[number, string, number]=[3, "Rossi", 90, 2, 1, "Bianchi"];
console.log(p3);


/*
Alessandros-MacBook-Pro:typescript netalex$ tsc 5-1_datatype.ts
Alessandros-MacBook-Pro:typescript netalex$ node 5-1_datatype.js
7
[ 'Rossi', 'Ferrari', 'Bianchi' ]
[ 'Rossi', 'Ferrari', 'Bianchi' ]
[ 3, 'Rossi', 90, 2, 1, 'Bianchi' ]
*/
