; (function () {
    'use strict';

    let bt, bf;
    let form = document.querySelector('form');

    let structure = {
        name: '姓名',
        email: '邮箱',
        balance: '余额',
    }

    let list = [
        {
            name: 'whh',
            email: 'whh@a.com',
            balance: 100,
        },
        {
            name: 'lsd',
            email: 'lsd@a.com',
            balance: 120,
        },
    ]


    boot();

    function boot() {
        perpareForm();
        prepareTable();
    }

    function prepareTable() {
        let actions = {
            delete(tr, i) {
                tr.remove();
                list[i] = null;
            },

            update(tr, i) {
                bf.setData(list[i]);
                form.querySelector('[name=index]').value = i;
            }
        };
        bt = biaoTable('table', structure, list, actions);
    }

    function perpareForm() {
        bf = biaoForm('form', onSubmit);
    }

    function onSubmit(row){
        if(!row.index&&row.index!==0)
            list.push(row);
        else
            list[row.index]=row;
        
        bt.render();
    }

})();





