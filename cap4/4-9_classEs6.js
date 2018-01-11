let closet = class {
  constructor(shoes){
    this.shoes=shoes;
    this.jackets=0;
  }
  setJackets(num){
    this,jackets=num;
  }
  total(){
    console.log('total: ');
  }
  static getShoes(shoes){
    return shoes;
  }
  empty(){
    this.shoes=0;
  }
};
/*
let pippo=new closet(90)
pippo.shoes
> 90
pippo.empty()
pippo.shoes
> 0
*/
