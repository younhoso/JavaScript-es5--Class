var superObj = {
    superVal: 'super'
}
var subObj = {  //subObj를 즉 객체를 superObj 자식으로 만들어버릴수 있다.
    subVal: 'sub'
}

subObj.__proto__ = superObj; // 자식object.__proto__ =부모object는 subObj를 superObj자식으로 만드는 방법
console.log('subObj.subVal=>',subObj.subVal);
console.log('subObj.superVal=>',subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal=>', superObj.superVal);