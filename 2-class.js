var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("x:" + this.x + ",y:" + this.y);
    };
    return Point;
}());
var point = new Point();
point.y = 2;
point.draw();
