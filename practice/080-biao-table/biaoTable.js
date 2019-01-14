; (function () {
    'use strict';

    window.biaoTable = { boot };

    let table, thead, tbody, structure,
        list, operations;

    function boot(tableSelector, struct, arr, ops) {
        table = document.querySelector(tableSelector);
        thead = table.tHead;
        tbody = table.tBodies[0];
        structure = struct;
        list = arr;
        operations = ops;

        render();
    };

    function render() {
        renderHead();
        renderBody();
    };

    function renderHead() {
        let html = '';
        for (let key in structure) {
            html += `<th>${key}</th>`;
        }

        if (operations)
            html += `<th>操作</th>`; 
        thead.innerHTML = html;
    };

    function renderBody() {
        list.forEach(it => {
            let tr = document.createElement('tr');
            let html = '';
            for (let key in structure) {
                html += `<td>${it[key] || '-'}</td>`
            };

            if (operations) {
                let btnHtml = '';

                for (let action in operations) {
                    btnHtml += `<button class="${action}">${action}</button>`;
                }
                html += `<td><button>${btnHtml}</button></td>`;
            }

            tr.innerHTML = html;

            if (operations) {

                for (let key in operations) {
                    tr
                        .querySelector('.' + key)
                        .addEventListener('click', () => {
                            o
                            
                            perations[key](tr, index);
                        });
                }
            }

            tbody.appendChild(tr);
        });
    };
})();

