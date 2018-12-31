// biaoTable插件开始
; (function () {
    'use strict';

    // 全文变量备用
    let table, thead, tbody
        , structure, list, operations;

    // 暴露插件全局变量
    window.biaoTable = { boot };

    /**
     * 启动
     * @param {string} tableSelector 对应表格的选择器
     * @param {Object} struct 应该显示哪些列
     * @param {Array} list 显示的数据
     * @param {Object} ops 个性按钮及行为
     */
    function boot(tableSelector, struct, arr, ops) {
        // 各种更新全文变量
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = arr;
        operations = ops;

        // 直接渲染
        render();
    }

    /**
     * 总渲染
     */
    function render() {
        renderHead();
        renderBody();
    }

    /**
     * 渲染thead
     *
     * 根据structure渲染thead
     * {
     *   name: '姓名',   ==>  |姓名|性别|
     *   gender: '性别',      |xxx|xxx|
     * }
     */
    function renderHead() {
        thead.innerHTML = '';

        // 初始化组装字符串
        let html = '';

        // 循环structure中的每一条
        for (let key in structure) {
            // 以 name:'姓名' 为例
            // 此时key为'name'
            // 意味着structure[key]为'姓名'
            // 意味着最后生成的字符串为'<th>姓名</th>'
            html += `<th>${structure[key]}</th>`;
        }

        // 如果传了个性行为就再加一个表头项
        if (operations)
            html += '<th>操作</th>';

        // 在thead内填充组装好的字符串
        thead.innerHTML = html;
    }

    /**
     * 渲染tbody
     *
     * 使用list渲染tbody（通过structure来限制渲染的数量和属性）
     */
    function renderBody() {
        tbody.innerHTML = '';

        // 循环每一条数据
        // 以用户列表为例 [{王花花...}, {李拴蛋...}]
        // 此时循环的就是每一个用户
        list.forEach((it, index) => {
            // 创建表格行
            let tr = document.createElement('tr');

            // 初始化tr的组装字符串
            let html = '';

            // 循环当前用户的属性
            // 以 {name: '王花花', gender: '女'} 为例
            for (let key in structure) {
                // 以 name: '王花花' 为例
                // 意味着最后生成的字符串为'<td>王花花</td>'
                html += `<td>${it[key] || '-'}</td>`;
            }

            // 如果传了个性行为
            if (operations) {
                // 就依据个性按钮的键生成button的html代码

                // 准备按钮的html代码
                let btnHtml = '';

                // 循环所有行为
                // 以
                // {
                //   Delete   : function(){...},
                //   Highlight: function(){...}
                // }
                // 为例
                for (let action in operations) {
                    // 每个行为都是一个按钮
                    // 以 Delete:function(){...} 为例
                    //                             ↓'Delete'  ↓'Delete'
                    btnHtml += `<button class="${action}">${action}</button>`;
                    // 最后得到 '<button class="Delete">Delete</button>'
                }

                // 将组装好的按钮html插入到操作单元格中
                // btnHtml ==> <button class="Delete">Delete</button>
                //             <button class="Highlight">Highlight</button>
                html += `<td>${btnHtml}</td>`;
            }

            // 在tr内填充组装好的字符串
            tr.innerHTML = html;

            // 如果传了个性行为
            if (operations) {
                // 就给每个行为对应的按钮绑事件
                for (let key in operations)
                    // 以 Delete:function(){...} 为例
                    tr
                        .querySelector('.' + key) // 现通过类名选中按钮，其类名为'.Delete'
                        .addEventListener('click', () => {
                            // 此处的operations[key]就是function(){...}函数本身
                            // 后面的小括号触发了函数，并将其所在行和对应的数据索引回传回去
                            operations[key](tr, index);
                        });
            }

            // 在tbody最后追加一行
            tbody.appendChild(tr);
        });
    }
})();
// biaoTable插件结束

// 使用插件开始
let orderStruct = {
    oid: '订单号',
    product: '产品',
    totalCost: '总费用',
};

let orders = [
    {
        oid: '001',
        product: '拖鞋',
        totalCost: 70,
    },
    {
        oid: '002',
        product: '毛裤',
        totalCost: 80,
    },
    {
        oid: '003',
        product: '枸杞',
        totalCost: 90,
    },
];

biaoTable.boot(
    '#order-table',
    orderStruct,
    orders,
    {
        /**
         * 删除数据和行
         * @param {HTMLTableRowElement} tr 按钮所在行
         * @param {number} 索引
         */
        Delete(tr, i) {
            // 删数据
            orders[i] = null;
            // 删行元素
            tr.remove();

            console.log(orders);
        },

        /**
         * 高亮所在行
         * @param {HTMLTableRowElement} tr
         */
        Highlight(tr) {
            // 缓存class对象
            let klass = tr.classList;

            // 激活状态的class叫啥
            let active = 'active';

            // 如果已经激活了
            if (klass.contains(active))
                // 就删除active类
                klass.remove(active);
            else // 否则
                // 就添加active类
                klass.add(active);
        },

        /**
         * 折扣价
         */
        Discounted(tr, i) {
            // 获取对应数据
            let it = orders[i];
            // 计算折扣并更新第三个单元格中的价格
            tr.cells[2].innerText = it.totalCost * .8;
        },

        /**
         * 上移
         */
        Up(tr, i) {
            // --------------
            // 上移数据
            // --------------

            // 目标索引（当前索引减1）
            let up = i - 1;

            // 如果是第一个（到头了）就直接返回，
            // 再上移就没有意义了
            if (up < 0)
                return;


            // 将目标位置的数据倒腾到临时变量里
            let tmp = orders[up];

            // 将当前元素存到目标索引里（装到前一个坑里）
            orders[up] = orders[i];

            // 吧临时的变量放到空出来的索引里
            orders[i] = tmp;

            // --------------
            // 上移元素
            // --------------

            // 找他哥
            let bother = tr.previousElementSibling;

            // 如果有他哥
            if (bother)
                // 就把他自己插到他哥前面
                bother.insertAdjacentElement('beforebegin', tr);
        },

        /**
         * 下移
         *
         * 逻辑和Up刚好相反
         */
        Down(tr, i) {
            // --------------
            // 下移数据
            // --------------

            let down = i + 1;

            if (down > orders.length)
                return;

            let tmp = orders[down];
            orders[down] = orders[i];
            orders[i] = tmp;

            // --------------
            // 下移元素
            // --------------

            let bother = tr.nextElementSibling;

            if (bother)
                bother.insertAdjacentElement('afterend', tr);
        },
    });

  // 使用插件结束