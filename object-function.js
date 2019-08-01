// **혼자 잘 지네고 있던 함수를 필요에 따라서 내가 원하는 객체에 추가로 메소드로 만들수 있다.**

var kim = {
    name: 'kim',
    first: 10,
    second : 20
}
var lee = {
    name: 'lee',
    first: 20,
    second: 30,
}
function sum(prefix) {  // 혼자 잘 지네고 있던 함수를 필요에 따라서 내가 원하는 객체에 추가로 메소드로 만들수 있다.
    return prefix + (this.first + this.second);
}

sum.call(kim); //sum.call(kim);는 즉 sum();이거와 같다.
console.log("sum.call(kim)", sum.call(kim, 'this'));    //sum 함수 호출하는데 call('this는 kim였으면 좋겠고', 'this') 매개변수를 추가할게
console.log("sum.call(lee)", sum.call(lee, ':'));       //sum 함수 호출하는데 call('this는 lee였으면 좋겠고', ':') 매개변수를 추가할게

var kimSum = sum.bind(kim, '-> ');  //bind는 밖에서 취지에 맞에 달라진 새로운 함수가 리턴만 해준다. 즉 sum 함수 원본에는 영향을 주지 않는다. 
console.log('kimSum()', kimSum());  // 리턴하는 것을 실행한다.