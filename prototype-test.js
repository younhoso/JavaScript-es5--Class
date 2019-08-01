// 생성자 (constructor)
function Card(num, color) {
    this.num = num;
    this.color = color;
    this.init();
}

Card.prototype = {  //prototype를 새로 세팅하는 용도라면 constructor: 생성자명을 작성해줘야 한다.
    constructor : Card,
    
    init : function() {
            const mainEle = document.createElement('div');
            mainEle.style.color = this.color;
            mainEle.innerHTML = this.num;
            mainEle.classList.add('card');
            document.querySelector('.A').appendChild(mainEle);
        }
    };

    const card1 = new Card('tend', 'green');
    card1.init = function() {
        return 'prototype::' + (this.num + this.color);
    }
    const card2 = new Card(7, 'blue');

   console.log(card1.init());


