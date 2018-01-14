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
  private halfVal:number;
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
5-10.1_classInterfaceExtendsError.ts(19,7): error TS2420: Class 'b' incorrectly implements interface 'Ib'.
  Property 'halfVal' is private in type 'b' but not in type 'Ib'.
5-10.1_classInterfaceExtendsError.ts(30,6): error TS2341: Property 'halfVal' is private and only accessible within class 'b'.

*/
