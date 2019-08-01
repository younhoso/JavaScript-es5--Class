
var Person = function(name, age, second, third){
    this.name = name;
    this.age = age;
    this.second = second;
    this.third = third;
}
Person.prototype.sum = function(){  //prototype은 Person 클래스 내부에서 공통으로 사용할 sum 메서드 만들기
    return 'prototype:'+(this.age + this.second + this.third);
}

var kin = new Person('so', 10, 20, 30);
kin.sum = function(){
    return 'this : '+this.name+( this.second + this.third);
}

var lee = new Person('younho', 10, 20, 3);
console.log('kin.sum()',kin.sum());
console.log('lee.sum()',lee.sum());
