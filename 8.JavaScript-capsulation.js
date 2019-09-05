
function Rectangle(width, height) {
    this._width = width;
    this._height = height;
}

Rectangle.prototype.getArea = function() {
    return this._width * this._height;
};

Rectangle.prototype.getWidth = function() {
    return this._width;
};
Rectangle.prototype.getHeight = function() {
    return this._height;
};
Rectangle.prototype.setWidth = function(value) {
    if(value <= 0){return alert('0보다 작은 값은 넣을 수 없습니다.')}
    this._width = value;
};
Rectangle.prototype.setHeight = function(value) {
    if(value <= 0){return alert('0보다 작은 값을 넣을 수 없습니다.')}
    this._height = value;
}


var tSet = new Rectangle(10, 5);
console.log(tSet.getArea());
console.log(tSet.setWidth(10));
console.log(tSet.getWidth());
console.log(tSet.setHeight(340));
console.log(tSet.getHeight());