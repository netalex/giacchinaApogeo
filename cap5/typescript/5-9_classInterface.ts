
interface Istore {
  shoes:number;
  total():void;
}
class closet implements Istore {
  shoes:number;
  constructor(shoes:number){
    this.shoes=shoes;
  }
  total() {
    return this.shoes;
  }
};

let a = new closet(120);
console.log(a.total());


/*

$ tsc 5-9_classInterface.ts
$ node 5-9_classInterface.js
120

*/
