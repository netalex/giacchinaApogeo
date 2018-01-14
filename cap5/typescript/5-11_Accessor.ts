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
    if(val){
      this.val=this.val/2;
      let pippo:string='setter used';
      console.log(pippo);
    } else {
      console.log("setter doesn't work");
    }
  }
}
let inst=new a(10);
console.log('getter: ', inst.valAcc);
//inst.valAcc2=10;
console.log('setter: ', inst.valAcc=10);


/*

$ tsc --target ES5 5-11_Accessor.ts
$ node 5-11_Accessor.js
20

*/
