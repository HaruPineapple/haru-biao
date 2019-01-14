; (function () {
    'use strict';

    // 用户列表，核心数据；整个程序都在围着它转
    let users = [
        {
            username: 'whh',
            email: 'whh@biaoyansu.com',
            balance: '183',
        },
        {
            username: 'lsd',
            email: 'lsd@biaoyansu.com',
            balance: '133',
        },
    ];

    // 公用元素对象
    let elForm = document.getElementById('user-form');
    let elTable = document.getElementById('user-table');
    let elTbody = elTable.tBodies[0];

    // 为了便于管理，将四个input放到一个对象里
    let inputs = {
        index: elForm.querySelector('[name=index]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    };

    boot();

    function boot() {
        render();
        bindSubmit();
    }

    /**
     * 监听提交事件
     */
    function bindSubmit() {
        elForm.addEventListener('submit', e => {
            e.preventDefault();

            // 初始化数据；最后从表单中取到的数据
            let row = {};

            // 获取<input name=index>的值
            // 这个值是判断当前提交到底是新增还是更新的依据
            // 因为只有更新的数据有索引（id）
            let index = inputs.index.value;

            // 取到其他<input>中的值
            row.username = inputs.username.value;
            row.email = inputs.email.value;
            row.balance = inputs.balance.value;

            // 是不是更新操作？
            index ?
                users[index] = row : // 有的话就更新数据
                users.push(row); // 没有的话就推入

            // 重置表单
            elForm.reset();

            // 数据发生改变了（无论是更新还是新增）
            // 就应该重新渲染表格
            render();
        });
    }


    /**
     * 渲染表格
     */
    function render() {
        // 清空前一次渲染
        elTbody.innerHTML = '';

        // 循环所有用户
        users.forEach((user, index) => {
            // 如果用户不存在就跳过
            // 因为删除用户时会将数据设为null
            if (!user)
                return;

            // 获取tr元素
            let tr = document.createElement('tr');

            // 为当前行填充单元格
            tr.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.balance}</td>
        <td class="text-right operation">
          <button class="fill">更新</button>
          <button class="delete">删除</button>
        </td>
        `;

            // 选中最后的单元格也就是存按钮的td
            tr.querySelector('.operation')
                // 让这个单元格作为一个整体代理单击事件
                .addEventListener('click', e => {
                    // 取到点击源的类对象
                    // e.target是点击源（谁冒的泡）
                    let klass = e.target.classList;

                    // 如果是删除按钮
                    if (klass.contains('delete')) {
                        // 那就
                        // 删数据
                        users[index] = null;
                        // 删视图
                        tr.remove();
                    }

                    // 如果是"更新"按钮（其实是填充）
                    if (klass.contains('fill')) {
                        // 就用当前行的数据填充表单
                        inputs.username.value = user.username;
                        inputs.email.value = user.email;
                        inputs.balance.value = user.balance;

                        // 这个比价特殊，index作为提交时判断新增还是更新的依据，
                        // 所以必须填上，如果不填，那么提交后就会新增一条数据（相当于
                        // 复制本条数据）
                        inputs.index.value = index;
                    }
                });

            // 在<tbody>上追加组装好的<tr>
            elTbody.appendChild(tr);
        });
    }
})();