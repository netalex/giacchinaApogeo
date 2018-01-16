new Promise((resolve, reject)=> {
  console.log('start');
  setTimeout(()=>{
    resolve('hello');
  },2000)
}).then((data)=>{console.log(data)});

//Promise {<pending>}
// hello
