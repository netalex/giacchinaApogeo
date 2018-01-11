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


/*
closet {shoes: 90}shoes: 90__proto__: Object

*/
