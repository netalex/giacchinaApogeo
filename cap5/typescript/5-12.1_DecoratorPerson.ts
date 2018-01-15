Object.defineProperty(person, 'name', {
    value:'Rossi',
    writable:true,
    enumerable:true,
    configurable:true
});
function modify(target:any, key:string, descriptor:propertyDescriptor):any{
    let aux = descriptor.value; //that's waaay coirconvoluted
    descriptor.value = function(){
        aux();
        console.log('World!');
    }
    return descriptor;
}
class C {
    @modify
    hello():void{
        console.log('Hello ')
    }
}
