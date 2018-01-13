interface Friends{
  [index:number]: {name:string, surname?:string};
}
let a:Friends = [
  {
    name:'carlo',surname:'rossi'
  },
  {name:'Marco'}
];
