//es5
var hello = function(nome){
  return 'Hello '+nome;
}

//es6
let hello = (nome)=>{return 'hello '+nome};

//'this' is global

//es5
 function test(){
   this.a=1;
   setTimeout(function(){
     console.log(this);
   },1000);
 }
 let paperino = new test();

 //es6
function test2(){
  this.a=1;
  setTimeout(()=>{
    console.log(this);
    console.log(this.a);
  },1000);
}
let pluto=new test2();

/*results:
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
test2 {a: 1}
1
*/
