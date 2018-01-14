var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a(val) {
        this.val = val;
    }
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b(val) {
        var _this = _super.call(this, val) || this;
        _this.halfVal = _this.val / 2;
        return _this;
    }
    b.prototype.getHalf = function () {
        return this.halfVal;
    };
    return b;
}(a));
var inst = new b(90);
console.log(inst.getHalf());
