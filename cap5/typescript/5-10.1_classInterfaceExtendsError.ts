/* error */

interface Ia {
  val:number;
}

interface Ib extends Ia {
  private halfVal:number;
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
inst.halfVal=0;
console.log(inst.getHalf());


/*

$ tsc 5-10.1_classInterfaceExtendsError.ts
5-10.1_classInterfaceExtendsError.ts(8,3):
error TS1070: 'private' modifier cannot appear on a type member.

*/
