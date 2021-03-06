let closet = class {
  constructor(shoes){
    this.shoes=shoes;
    this.jackets=0;
  }
  setJackets(num){
    this.jackets=num;
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

class shelf extends closet {
  init(a,b){
    this.shoes=a;
    this.jackets=b;
  }
  total(){
    super.total();
    console.log(this.shoes, ' - ', this.jackets);
  }
}

let armadio = new closet(90);
let scaffale = new shelf(12, 45);
/*
let pippo=new closet(90)
pippo.shoes
> 90
pippo.empty()
pippo.shoes
> 0

scaffale.setJackets(34)
scaffale.total()
> total:
> 12 " - " 34
*/
