var a = /** @class */ (function () {
    function a(val) {
        this.val = val;
    }
    Object.defineProperty(a.prototype, "valAcc", {
        get: function () {
            return this.val + 10;
        },
        set: function (val) {
            if (val) {
                this.val = this.val / 2;
                var pippo = 'setter used';
                console.log(pippo);
            }
            else {
                console.log("setter doesn't work");
            }
        },
        enumerable: true,
        configurable: true
    });
    return a;
}());
var inst = new a(10);
console.log('getter: ', inst.valAcc);
//inst.valAcc2=10;
console.log('setter: ', inst.valAcc = 10);
/*

$ tsc --target ES5 5-11_Accessor.ts
$ node 5-11_Accessor.js
20

*/
