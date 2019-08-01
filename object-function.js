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
function sum(prefix) {
    return prefix + (this.first + this.second);
}

sum.call(kim); //sum.call(kim);는 즉 sum();이거와 같다.
console.log("sum.call(kim)", sum.call(kim, 'this'));    //sum 함수 호출하는데 call('this는 kim였으면 좋겠고', 'this') 매개변수를 추가할게
console.log("sum.call(lee)", sum.call(lee, ':'));       //sum 함수 호출하는데 call('this는 lee였으면 좋겠고', ':') 매개변수를 추가할게

// lee.__proto__ = kim
// var lee = Object.create(kim);