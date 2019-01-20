; (function () {
    'use strict';

    let is = {
        numeric(value) {
            return !isNaN(parseFloat(value));
        },

        min(value, guide) {
            if (!this.numeric(value))
                return false;

            return value >= guide;
        },

        max(value, guide) {
            if (!this.numeric(value))
                return false;

            return value <= guide;
        },

        between(value, min, max) {
            // return value < max && value > min;
            return this.min(value, min) &&
                this.max(value, max);
        },

        positive(value) {
            if (!this.numeric(value))
                return false;
            return value > 0;
        },

        negative(value) {
            if (!this.numeric(value))
                return false;
            return value < 0;
        },

        minLength(value, guide) {
            return value.length >= guide;
        },

        maxLength(value, guide) {
            return value.length <= guide;
        },

        lengthBetween(value, min, max) {
            return this.minLength(value, min) &&
                this.maxLength(value, max);
        },

        startsWith(value, guide) {
            return value.startsWith(guide);
        },

        endsWith(value, guide) {
            return value.endsWith(guide);
        },

        includes(value, guide) {
            return value.includes(guide);
        },

        /**
        *在数组中
        *@param  {min}value
        *@param  {Array}guide
        */
        in(value, guide) {
            return guide.indexOf(value) !== -1;
        },

        regex(value, reg) {
            if (typeof reg == 'string')
                reg = new RegExp(reg);

            return reg.test(value);
        },

        email(value) {
            //whh@a.com
            let re = /^\w+@\w+\.\w+$/;

            return re.test(value);
        },

        username(value) {
            //whh@a.com
            let re = /^[a-zA-Z0-9]\w+$/;

            return re.test(value);
        },

        phone(value, country = 'zh') {
            let re;

            switch (country) {
                case 'zh':
                    let re = /^(?:\+?(?:86))?(\s|-)?1\d{10}$/;
                    break;
            }
            return re.test(value, 'zh');
        }

    };

    window.valee = {
        validate(value, strRule) {
            return applyRules(value, parseRule(strRule));
        },
        is,
        applyRules,
        
    };


    function applyRules(value, rules) {
        let valid = true;

        for (let key in rules) {
            let ru = rules[key];

            try {
                // 相当于 is.min(6, 10)
                is[key](value, ru);
            } catch (e) { // 捕获验证错误
                // 推入错误数组中
                errors.push(e);
            }
        }

        return errors;
    }

    function parseRule(str) {
        let ruleArr = str.split('|');
        let rule = {};

        ruleArr.forEach(it => {
            let itArr = it.split(':');
            let key = itArr[0];
            let guide = itArr[1];
            let numRules = ['numeric', 'max', 'min', 'between', 'minLength', 'maxLength'];
            if (!guide)
                guide = true;
            else {
                if (numRules.indexOf(key))
                    guide = parseFloat(guide);
            }
            rule[key] = guide;
        });

        return rule;
    }

})();