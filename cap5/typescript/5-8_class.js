var closet = /** @class */ (function () {
    function closet(shoes) {
        this.shoes = shoes;
    }
    closet.prototype.total = function () {
        return this.shoes;
    };
    return closet;
}());
;
