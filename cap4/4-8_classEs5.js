let closet = function(shoes){
  this.shoes=shoes;
  this.empty=function(){
    this.shoes=0;
  }
}
let obj=new closet(90);
console.log(obj);
obj.empty();
console.log(obj);

closet.prototype.putShoes = function(num){
  this.shoes=num;
};

obj.putShoes(90);
console.log(obj);

Object.prototype.hello = function(){console.log('ciao');};
let s='stringa';
console.log(s.hello(),s.__proto__.__proto__.hello());
console.log(s.valueOf(), s.hello())
/*
closet {shoes: 90, empty: ƒ}
closet {shoes: 0, empty: ƒ}
closet {shoes: 90, empty: ƒ}
ciao
stringa
*/
