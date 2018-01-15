var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(person, 'name', {
    value: 'Rossi',
    writable: true,
    enumerable: true,
    configurable: true
});
function modify(target, key, descriptor) {
    var aux = descriptor.value; //that's waaay coirconvoluted
    descriptor.value = function () {
        aux();
        console.log('World!');
    };
    return descriptor;
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.hello = function () {
        console.log('Hello ');
    };
    __decorate([
        modify
    ], C.prototype, "hello");
    return C;
}());
