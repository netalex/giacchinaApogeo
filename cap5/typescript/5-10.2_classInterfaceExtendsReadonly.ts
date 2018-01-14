/* error */

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
  readonly halfVal:number;
  constructor(val:number){
    super(val); //??
    this.halfVal=this.val/2;
  }
  getHalf():number{
    return this.halfVal;
  }
}
let inst = new b(90);
inst.halfVal=0;
console.log(inst.getHalf());


/*

$ tsc 5-10.2_classInterfaceExtendsReadonly.ts
5-10.2_classInterfaceExtendsReadonly.ts(30,6): error TS2540: Cannot assign to 'halfVal' because it is a constant or a read-only property.
*/
