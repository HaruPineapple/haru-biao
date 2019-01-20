; (function () {
    'use strict';

    //暴露出去的接口
    window.biaoPage = { boot, render, };

    //默认属性
    const DEFAULT_CONFIG = {
        limit: 10,
        currentPage: 1,
    };


    function boot(settings) {
        let config = Object.assign({}, DEFAULT_CONFIG, settings);
        //state：全部属性
        //config倾向于是静态的属性合并结束后就不再改变。state倾向于是动态的属性。
        let state = { config };
        state.currentPage = config.currentPage;
        prepare(state);
        render(state);
        bindEvents(state);
    };

    function prepare(state) {
        let el = document.createElement('div');
        el.classList.add('biao-page');

        el.innerHTML = `
        <span class="shortcuts">
            <button class="biao-first">首页</button>
            <button class="biao-prev">上一页</button>
        </span>

        <span class="page-list"></span>

        <span class="shortcuts">
            <button class="biao-next">下一页</button>
            <button class="biao-last">尾页</button>
        </span>
        `;

        state.root = document.querySelector(state.config.selector);
        state.el = el;
        state.next = el.querySelector('.biao-next');
        state.prev = el.querySelector('.biao-prev');
        state.pageList = el.querySelector('.page-list');
        state.root.appendChild(el);
    }

    function render(state) {
        let pageAmount =
            state.pageCount =
            Math.ceil(state.config.amount /
                state.config.limit);

        let list = state.pageList;
        list.innerHTML = '';
        for (let i = 1; i <= pageAmount; i++) {
            let page = i;
            let button = document.createElement('button');
            button.classList.add('biao-page-item');
            //只有当前是currentPage（当前页）才可以加active属性
            if (state.currentPage === page)
                button.classList.add('active');
            button.innerText = page;
            //page是i一个数字。$page是button的一项属性，用page的值来定义这个属性（？）
            button.$page = page;
            state.pageList.appendChild(button);
        };

        state.buttons = state.pageList.querySelectorAll('.biao-page-item');
    };

    function bindEvents(state) {

        state.el.addEventListener('click', e => {
            // 缓存
            let target = e.target;
            let page = target.$page;
            let klass = target.classList;

            // 如果是数字按钮，就跳到对应的页
            if (page)
                setCurrentPage(state, page);

            // 如果点的是"下一页"
            if (klass.contains('biao-next'))
                setCurrentPage(state, state.currentPage + 1);

            // 如果点的是"上一页"
            if (klass.contains('biao-prev'))
                setCurrentPage(state, state.currentPage - 1);

            // 如果点的是"第一页"
            if (klass.contains('biao-first'))
                setCurrentPage(state, 1);

            // 如果点的是"最末页"
            if (klass.contains('biao-last'))
                setCurrentPage(state, state.pageCount);
        });
    };

    //配置currentPage使它可以：
    function setCurrentPage(state, page) {
        if (page < 1)
            setCurrentPage(state, 1);
        if (page > state.pageCount)
            setCurrentPage(state.pageCount);

        state.currentPage = page;

        let onChange=state.config.onChange;
        onChange&&onChange(page,state);
        
        state.buttons.forEach(it => {
            if (it.$page != page) {
                it.classList.remove('active');
                return;
            } else {
                it.classList.add('active');
            }
        });
    }
})();