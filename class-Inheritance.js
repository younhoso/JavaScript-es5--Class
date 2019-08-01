class Person {
    // class에서 생성되는 객체를 어떻게 초기화 하는가?? (constructor)
    constructor(name, first, second){  //자바스크립트는 객체를 생성 (밑에서 new Person()) 할때 constructor함수를 먼저 자동으로 호출한다.
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){  //클래스 내부에 있는 공통메서드 
        return 'prototype : '+(this.first + this.second);
    }
}

class PersonPlus extends Person{    //extends(확장하다.)를 통해서 부모 class가 가지고 있는 모든 변수, 메서드 등등을 자식 class에 상속 받을수 있다.  
    avg(){
        return (this.first + this.second) / 2;
    }
}

// var so = new Person ('so', 20, 30);     //부모클리스를 인스턴스할때는 자식이 가지고 있는 변수,메서드 등등을 모른다.
// console.log('so.avg()', so.age());

var kin = new PersonPlus('kim', 10, 20);     //자식클리스는 인스턴스할때 부모가 가지고 있는 변수,메서드 등등을 알고 있다.
kin.sum = function(){                        //kin라는 객체만 sum이라는 메서드를 다르게 동작하는 메서드 추가
    return 'this:'+ this.name + this.first;
}

var kin2 = new PersonPlus('kim', 10, 20);

console.log('kin.sum():',kin.sum());    //kin.sum(): this:kim10
console.log('kin2.sum():',kin2.sum());  //kin2.sum(): prototype : 30
console.log('kin.avg()',kin.avg());     //kin.avg() 15