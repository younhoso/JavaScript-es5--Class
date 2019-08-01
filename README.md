# JavaSript object(es5) 정리

prototype vs proto 설명
1. Person이라는 함수를 정의했고
2. Person이라는 새로는 객체가 생성됩니다.
3. Person's prototype이라는 객체가 하나 더 생긴다.
4. Person 객체는 내부적으로 prototype이라는 프로퍼티가 생기고 Person's prototype(초록색 박스)이라는 객체를 가리킨다.
5. Person's prototype(초록색 박스)객체도 내부적으로 constructor 프로퍼티가 생기고 prototype(핑크색 박스)이라는 객체를 가리킨다.
여기까지는 핑크박스와, 초록박스 서로간에 상호참조를 하고 있다.

6. Person's prototype(초록색 박스)객체에 sum이라고 하는 함수를 정의한다.

7. kim 이라는(노란박스)객체룰 생성하면 내부적으로 __proto__가 생성된다.
8. 그 kim객체에 __proto__가 Person's prototype(초록박스)이라는 객체를 가리킨다.

9. lee 이라는(노란박스)객체룰 생성하면 내부적으로 __proto__가 생성된다.
10. 그 lee객체에 __proto__가 Person's prototype(초록박스)이라는 객체를 가리킨다.

11. console.log(kim.name)을 실행하면 kim객체안에 name이라는 변수를 찾고 있다면 출력한다.
12. kim.sum()을 실행하면 kim객체안에 sum이라는 메서드를 찾고 없다면 __proto__를통해서 Person's prototype(초록색 박스)에 sum이라느 메서드를 찾는다. 
있다면 출력한다.

![alt text](http://gofile.me/4BHto/GPdIZXEvi)
