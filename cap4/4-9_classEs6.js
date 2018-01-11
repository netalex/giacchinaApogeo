let closet = class {
  constructor(shoes){
    this.shoes=shoes;
  }
  empty(){
    this.shoes=0;
  }
  static getShoes(shoes){
    return shoes;
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
