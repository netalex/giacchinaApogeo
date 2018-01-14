interface Ia {
  val:number;
}
class a implements Ia {
  val:number;
  constructor(val:number) {
    this.val=val;
  }
  get valAcc():number{
    return this.val+10;
  }
  set valAcc(val:number){
    this.val=val-10;
  }
}
let inst=new a(10);
console.log(inst.valAcc);

/*

$ tsc --target ES2016 5-11_Accessor.ts
$ node 5-11_Accessor.js
20

*/
