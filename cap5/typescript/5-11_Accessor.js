var a = /** @class */ (function () {
    function a(val) {
        this.val = val;
    }
    Object.defineProperty(a.prototype, "valAcc", {
        get: function () {
            return this.val + 10;
        },
        set: function (val) {
            this.val = val - 10;
        },
        enumerable: true,
        configurable: true
    });
    return a;
}());
var inst = new a(10);
console.log(inst.valAcc);
/*

$ tsc --target ES2016 5-11_Accessor.ts
$ node 5-11_Accessor.js
20

*/
