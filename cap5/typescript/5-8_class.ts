class closet {
  shoes:number;
  constructor(shoes:number){
    this.shoes=shoes;
  }
  total(){
    return this.shoes;
  }
};
let pippo = new closet(90);
console.log(pippo.total());


/*
$ tsc 5-8_class.ts
$ node 5-8_class.js
90
*/
