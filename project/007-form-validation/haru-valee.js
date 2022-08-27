; (function () {
    let form = document.querySelector('.haru-form');
    let errorContainer = form.querySelector('.error-container');
    let data = {};
    let error = {
        username: [],
        email: [],
        phone: [],
        password: [],
    }

    window.valee = {
        isUsername,
        isEmail,
        isPhone,
        isPassword,
        betweenLength,
        between,
    }



    function isUsername(str) {
        if (!betweenLength(str, 4, 12) ||
            str.includes('shit'))
            return false;

        return true;
    };

    function isEmail(str) {
        if (!str.includes('@'))
            return false;

        return true;
    };

    function isPhone(str) {
        if ((str.length != 11 &&
            str.length != 13 &&
            str.length != 14) ||
            !str.startsWith('1')
        )
            return false;

        return true;
    }

    function isPassword(str) {
        if (!betweenLength(str, 6, 64))
            return false;

        return true;
    }

    function betweenLength(str, min, max) {
        return between(str.length, min, max);
    };

    function between(str, min, max) {
        return str >= min && str <= max;
    };

    boot();

    function boot() {
        bindEvents();
    }

    function bindEvents() {
        bindSubmit();
        bindKeyup();
    }

    function bindKeyup() {
        // let errorInput=form.querySelector('.error');
        form.addEventListener('keyup', e => {
            if (e.key != 'Enter')
                resetErrorInput();
        })
    }

    function bindSubmit() {
        form.addEventListener('submit', e => {
            e.preventDefault();
            //取到input提交的值
            data.username = form.querySelector('[name = username]').value;
            data.email = form.querySelector('[name = email]').value;
            data.phone = form.querySelector('[name = phone]').value;
            data.password = form.querySelector('[name = password]').value;

            if (!validate(data))
                showError(error);
            else
                hideError();
        })
    }

    function validate(data) {
        let valid = true;

        error = {
            username: [],
            email: [],
            phone: [],
            password: [],
        };

        if (!isUsername(data.username)) {
            valid = false;
            error.username.push('用户名格式错误，长度应在4至12之间');
        };

        if (!isEmail(data.email)) {
            valid = false;
            error.email.push('邮箱格式错误');
        };

        if (!isPhone(data.phone)) {
            valid = false;
            error.phone.push('电话格式错误');
        };

        if (!isPassword(data.password)) {
            valid = false;
            error.password.push('密码格式错误，长度应在6至64之间');
        };

        return valid;
    };

    function hideError() {
        errorContainer.hidden = true;
        resetErrorInput();
    }

    function resetErrorInput() {
        form.querySelectorAll('.error').forEach(it => {
            it.classList.remove('error');
        })
    }

    function showError(error) {
        errorContainer.hidden = false;
        let html = errorContainer.innerHTML = '';
        for (let key in error) {
            let it = error[key];
            let klass = form.querySelector(`[name=${key}]`).classList;
            if (it.length)
                klass.add('error');
            it.forEach(str => {
                let errorItem = document.createElement('div');
                errorItem.innerText = str;
                errorContainer.appendChild(errorItem);
            });
        }
    }
})();