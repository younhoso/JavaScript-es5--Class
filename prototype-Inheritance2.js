var superObj = {
    superVal: 'super'
}

//subObj.__proto__ = superObj;      // 자식object.__proto__ =부모object는 subObj를 superObj자식으로 만드는 방법

var subObj = Object.create(superObj);  //__proto__를 개선한 자바스크립트 표준 문법 
subObj.subVal = 'sub';
// debugger;
console.log('subObj.subVal=>',subObj.subVal);
console.log('subObj.superVal=>',subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal=>', superObj.superVal);

var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
}
//__proto__를 개선한 자바스크립트 표준 문법  Object.create
var lee = Object.create(kim);   //var 자식object = Object.create(부모object)  (object 끼리 상속)
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg =  function(){
    return (this.first + this.second) / 2
};

// var lee = {
//     name: 'lee',
//     first: 10,
//     second: 10,
//     //lee 객체에서만 추가하고 싶은 기능이 있다면 다음과 같이 추가하면 된다.
//     avg: function() {
//         return (this.first + this.second) / 2;
//     }
// }

// lee.__proto__ = kim; //자식object.__proto__ = 부모object  (object 끼리 상속)

console.log('kim.sum() :', kim.sum() );  //kim.sum() : 30
console.log('lee.sum() :', lee.sum() );  //lee.sum() : 20
console.log('lee.avg() :', lee.avg() );  //lee.avg() : 10
