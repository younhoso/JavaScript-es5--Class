import $ from 'jquery';
import './js/sub.js'
import './css/reset.css';
import './css/main.css';

window.$ = window.jQuery = $;
$(function(){
    
});

(function(){
    const stageElem = document.querySelector('.stage');
    let currentItem;
    
    class Handler {
        constructor(ele) {
            this.eles = ele;
            this.init();
        }

        init() {
            this.addEvents();
        }
        addEvents() {
                // 활성화
                const activate = (ele) => {
                    ele.classList.add('door-opened');
                    currentItem = ele;
                }

                 // 비활성화
                const inactivate = (ele) => {
                    ele.classList.remove('door-opened');
                }

                const doorHandler = (e) => {
                    const targetelem = e.target;
                    
                    if(currentItem){
                        inactivate(currentItem);
                    }

                    if(targetelem.classList.contains('door-body')) {
                        activate(targetelem.parentNode);
                    }
                }

            this.eles.addEventListener('click', doorHandler);
            activate(document.querySelector('.door:nth-child(1)'))
        }
    }

    class HandlerPlus extends Handler {
        constructor(ele, first) {
            super(ele);
            this.first = first;
        }
        avg() {
            return (this.first) * 3;
        }
    }

    var so = new HandlerPlus(stageElem);
})();

