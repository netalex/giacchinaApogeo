let a:any=8;
a = 'ciao';

let obj ={};
let b:any = obj;
console.log(b.stampa()); //does'nt exist but no error

/*
$ node 5-4_any.js
/Users/.../5-4_any.js:5
console.log(b.stampa()); //does'nt exist but no error
              ^

TypeError: b.stampa is not a function
    at Object.<anonymous> (/Users/netalex/GoogleDrive/studio2018/giacchinaApogeo/cap5/typescript/5-4_any.js:5:15)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)
    at Function.Module.runMain (module.js:665:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
*/
