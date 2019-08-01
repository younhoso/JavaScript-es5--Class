var superObj = {
    superVal: 'super'
}

//subObj.__proto__ = superObj;      // 자식object.__proto__ =부모object는 subObj를 superObj자식으로 만드는 방법

var subObj = Object.create(superObj); // __proto__를 개선한 표준 자바스크립트 문법 
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal=>',subObj.subVal);
console.log('subObj.superVal=>',subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal=>', superObj.superVal);