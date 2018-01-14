@modify
class C {
  hello():void{
    console.log('Hello!');
  }
}

function modify(target:Function):any{
  let f:any = function(){
    console.log("New: ");
  }
  f.prototype=target.prototype; //!!!!
  return f;
}

Object.defineProperty()