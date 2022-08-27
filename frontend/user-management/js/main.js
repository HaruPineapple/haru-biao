;
(function() {
    'use strict';

    let elForm = document.getElementById('user-form')
    let elTable = document.getElementById('user-table')
    let tBody = elTable.tBodies[0]
    let inputs = {
        index: elForm.querySelector('[name=index]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    }
    let users = [{
            username: 'whh',
            email: 'whh@yo.com',
            balance: 100
        },
        {
            username: 'lsd',
            email: 'lsd@yo.com',
            balance: 50
        },
    ]

    boot()

    function boot() {
        bindSubmit()
        rander()
    }

    function bindSubmit() {
        elForm.addEventListener('submit', e => {
            e.preventDefault();

            let row = {}
            let index = inputs.index.value
            row.username = inputs.username.value
            row.email = inputs.email.value
            row.balance = inputs.balance.value

            index ? users[index] = row : users.push(row);

            rander()
        })
    }

    function rander() {
        tBody.innerHTML = ''
        users.forEach((user, index) => {
            if (!user)
                return;
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.balance}</td>
            <td class="operations"><button class="delete">删除</button><button class="fill">修改</button></td>
            `
            let operations = tr.querySelector('.operations')
            operations.addEventListener('click', e => {
                let klass = e.target.classList;
                if (klass.contains('delete')) {
                    tr.remove()
                    users[index] = null;
                }
                if (klass.contains('fill')) {
                    inputs.index.value = index
                    inputs.username.value = user.username
                    inputs.email.value = user.email
                    inputs.balance.value = user.balance
                }

            })
            elForm.reset()
            tBody.appendChild(tr)
        })
    }
})();