
function getData(form) {
    let data = {};
    let inputs = form.querySelectorAll('[name]');

    inputs.forEach(it => {
        switch (it.type) {
            case 'number':
                data[it.name] = parseFloat(it.value);
                break;
            case 'radio':
                if (!it.checked)
                    return;
                data[it.name] = it.value;
                break;
            case 'checkbox':
                if (!Array.isArray(data[it.name]))
                    data[it.name] = [];
                if (it.checked)
                    data[it.name].push(it.value);
                break;
            case 'date':
                data[it.name] = it.valueAsDate;
                break;
            default:
                data[it.name] = it.value;
        }
    });

    return data;
}

let d = getData(document.getElementById('a'));
console.log(d);

function setData(data, form) {
    for (let key in data) {
        let val = data.key;
        let input = form.querySelector(`[name=${key}]`);

        switch (input.type) {
            case 'radio':
                let radio = form.querySelector(`[type=radio][value=${val}]`);
                radio && (radio.checked = true);
                break;
            case 'checkbox':
                let radio = form.querySelector(`[type=checkbox][value=${it}]`);
                checkbox && (checkbox.checked = true);
                break;
            default:
                input.value = data[key];

        }
    }
}

setData(user, document.getElementById('b'));