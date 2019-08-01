class Person {
    // class에서 생성되는 객체를 어떻게 초기화 하는가?? (constructor)
    constructor(name, first, second){  //자바스크립트는 객체를 생성 (밑에서 new Person()) 할때 constructor함수를 먼저 자동으로 호출한다.
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor')
    }
    sum(){  //클래스 내부에 있는 공통메서드 
        return this.first + this.second;
    }
}

class PersonPlus extends Person{    //extends(확장하다.)를 통해서 부모 class가 가지고 있는 모든 변수, 메서드 등등을 자식 class에 상속 받을수 있다.  
    constructor(name, first, second, third){
        super(name, first, second); //super()는 부모클래스에 생성자를 뜻한다.
        this.third = third;
    }
    sum(){  //클래스 내부에 있는 공통메서드 
        return super.sum() + this.name + this.third;    //super.sum()는 부모클래스에 메서드를 호출하므로서 재사용하는것
    }
    avg(){      //avg는 부모클레스에는 없었던 자식클래스(PersonPlus)에 추가된 메서드이다.
        return (this.first + this.second) / 2;
    }
}
var kin2 = new PersonPlus('kim', 10, 20, 50);
console.log('kin2.sum():',kin2.sum());  //결과 kin2.sum(): 30kim50
console.log('kin2.avg():',kin2.avg());  //결과 kin2.avg(): 15


