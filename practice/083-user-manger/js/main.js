; (function () {
    'use strict';

    let users = [
        {
            username: 'whh',
            email: 'whh@biaoyansu.com',
            balance: 183,
        },
        {
            username: 'lsd',
            email: 'lsd@biaoyansu.com',
            balance: 133,
        },
    ];

    let elForm = document.getElementById('user-form');
    let elTable = document.getElementById('user-tabel');
    let elTbody = elTable.tBodies[0];

    let inputs = {
        index: elForm.querySelector('[name=index]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    };

    boot();

    function boot() {
        bindSubmit();
        render();
    }

    function bindSubmit() {
        elForm.addEventListener('submit', e => {
            e.preventDefault();

            let row = {};

            let index = inputs.index.value;

            row.username = inputs.username.value;
            row.email = inputs.email.value;
            row.balance = inputs.balance.value;

            index? 
                users[index] = row:
                users.push(row);

            elForm.reset();
            render();
        })
    }

    function render() {
        elTbody.innerHTML = '';

        users.forEach((user, index) => {
            if (!user)
                return;

            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.balance}</td>
            <td class="text-right  operation">
                <button class="fill">更新</button>
                <button class="delete">删除</button>
            </td>
            `;

            // let q = tr.querySelector;    用不了

            tr.querySelector('.operation')
                .addEventListener('click', e => {
                    let klass = e.target.classList;

                    if (klass.contains('delete')) {
                        users[index] = null;
                        tr.remove();
                    };

                    if (klass.contains('fill')) {
                        inputs.index.value = index;
                        inputs.username.value = user.username;
                        inputs.email.value = user.email;
                        inputs.balance.value = user.balance;
                    };
                });

            elTbody.appendChild(tr);
        });
    }

})();