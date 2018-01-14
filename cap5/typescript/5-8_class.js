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
var pippo = new closet(90);
console.log(pippo.total());
