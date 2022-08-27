; (function () {
    'use strict';
    let todoList = document.getElementById('todo-list');
    let todoForm = document.getElementById('todo-form');
    let todoInput = todoForm.querySelector('[name=title]');
    let $list;
    boot();

    function boot() {
        read();
        bindEvents();
    }

    function read() {
        api('todo/read', null, data => {
            $list = data;
            // 每次取完数据之后都render一下
            render();
        })
    }
    function render() {
        
    }
    function bindEvents() {
        todoForm.addEventListener('submit', e => {
            e.preventDefault();
            let item = todoInput.value;
            console.log(item);
        })
    }

})();