/* error */

interface Ia {
  val:number;
}

interface Ib extends Ia {
  readonly halfVal:number;
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
console.log(inst.getHalf());


/*

no error

*/
