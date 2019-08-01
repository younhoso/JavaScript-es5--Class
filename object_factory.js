// var Person = function(){
//     this.name = 'th';
//     this.age = 32;
//     this.second = 20;
//     this.third = 30;
//     this.sum = function(){
//         return this.age + this.second + this.third;
//     }
// }

var Person = function(name, age, second, third){
    this.name = name;
    this.age = age;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.age + this.second + this.third;
    }
}
var kin = new Person('so', 10, 20, 30);
var lee = new Person('younho', 10, 20, 3);

console.log(kin.sum());
console.log(lee.sum());

