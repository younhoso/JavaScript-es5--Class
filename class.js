class Person {
    // class에서 생성되는 객체를 어떻게 초기화 하는가?? (constructor)
    constructor(name, first, second){  //자바스크립트는 객체를 생성 (밑에서 new Person()) 할때 constructor함수를 먼저 자동으로 호출한다.
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor')
    }
    sum(){  //클래스 내부에 있는 공통메서드 
        return 'prototype : '+(this.first + this.second);
    }
}

var kin = new Person('kim', 10, 20);
 //kin이라는 객체 만큼은 다르게 동작하는 메서드를 만들고 싶다면. 
 // sum메서드에 function을 추가하면 된다.
kin.sum = function(){   
    return 'this : '+this.name+( this.second);
}

var lee = new Person('younho', 10, 20, 3);
console.log('kin.sum():',kin.sum());
console.log('lee.sum()',lee.sum());