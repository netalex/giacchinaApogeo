let test = function(){
  let aux=10;
  this.method = function(){
    console.log(aux);
  }
}

test.prototype._method = function () {
  console.log(aux);
};

let a = new test();
a.method();
a._method();

/*
> 10
> Uncaught ReferenceError: aux is not defined
>   at test._method (<anonymous>:9:15)
>   at <anonymous>:14:3
> test._method @ VM2346:9
> (anonymous) @ VM2346:14
*/
