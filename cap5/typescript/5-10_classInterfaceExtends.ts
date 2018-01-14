interface Ia {
  val:number;
}

interface Ib extends Ia {
  halfVal:number;
  getHalf():number;
}

class a implements Ia {
  val:number;
  constructor (val:number) {
    this.val= val;
  }
}

class b extends a implements Ib {
  halfVal:number;
  constructor(val:number){
    super(val); //??
    this.halfVal=this.val/2;
  }
  getHalf():number{
    return this.halfVal;
  }
}
let inst = new b(90);
console.log(inst.getHalf());


/*

$ tsc 5-10_classInterfaceExtends.ts
$ node 5-10_classInterfaceExtends.js
45

*/
