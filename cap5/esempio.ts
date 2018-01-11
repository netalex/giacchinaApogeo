function diff(a:number):number{
  return a-2;
}
let aux = 's';
let n = Math.abs(diff(aux));
console.log(n);

// $ tsc esempio.ts
// esempio.ts(5,23): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
