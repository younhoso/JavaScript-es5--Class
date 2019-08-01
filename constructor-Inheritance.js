//  ** 생성자 함수를 통한 상속 : 부모와 연결하기**

function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
     return this.first + this.second;
}

function PersonPlus(name, first, second ,third) {
    Person.call(this, name, first, second);
    this.third = third;
}
//PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype); //PersonPlus.prototype 객체를 Person.prototype 객체에 연결해준다.
PersonPlus.prototype.constructor = PersonPlus;  //PersonPlus의 constructor는 PersonPlus 입니다.라고 지정한다.

PersonPlus.prototype.avg = function() {
    return (this.first + this.second + this.third) / 3;
}

var kin2 = new PersonPlus('kim', 10, 20, 50);
console.log('kin2.sum():',kin2.sum());  //결과 kin2.sum(): 30
console.log('kin2.avg():',kin2.avg());  //결과 kin2.avg(): 26.666666666666668
console.log('kin2.avg():',kin2.constructor);