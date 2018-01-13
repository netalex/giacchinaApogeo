interface Friends {
  [index:number]:string;
}
let a:Friends=['Mario', 'Carlo', 'Dario'];
a[3]='Pippo';

interface Friends2{
  [index2:string]:string;
}
let b:Friends2={

'Milano':'Carlo',
'Roma':'Sara',
'Milano Due':'Giulio',
}

console.log(a[1], b['Milano'])
