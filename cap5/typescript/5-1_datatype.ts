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

let x:[number,string]=[90, "Rossi"];
let test = x[1].toUpperCase();
for(let y of x){
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
