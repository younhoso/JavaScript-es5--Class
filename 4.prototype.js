var Person = function(name, age, second, third){
    this.name = name;
    this.age = age;
    this.second = second;
    this.third = third;
}
Person.prototype.sum = function(){  //Person.prototype는 생성자함수 안에 들어있지 않고, 밖에 있기에 new Person 할때마다 실행되지 않게된다. 한번만 정의되기때문에 메모리도 절약된다.                        // (또 공통으로 사용할 sum 메서드 만든다.)
    console.log(this);
    return 'prototype:'+(this.age + this.second + this.third);
}

var kin = new Person('so', 10, 20, 30);
kin.sum = function(){   //kin이라는 객체만큼은 다르게 동작하고 싶을때  
    return 'this : '+this.name+( this.second + this.third);
}

var lee = new Person('younho', 10, 20, 3);
console.log('kin.sum()',kin.sum());
console.log('lee.sum()',lee.sum());
 