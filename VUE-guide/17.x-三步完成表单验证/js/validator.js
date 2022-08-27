$(function () {
    'use strict';

    window.Validator = function (val, rule) {

        this.is_valid = function (new_val) {
            var key;
            if (new_val !== undefined)
                val = new_val || val;

            // 如果不是必填项，且用户未填写，则直接判定为合法。请直接执行下一项。
            if (!rule.required && !val) {
                return true;
            }

            for (key in rule) {
                // 防止重复检查
                if (key === 'required')
                    continue;

                // 调用rule中相对应的方法
                var r = this['validate_' + key]();
                if (!r) return false;
            }

            return true;
        }

        this.validate_max = function () {
            pre_max_min();
            return val <= rule.max;
        };

        this.validate_min = function () {
            pre_max_min();
            return val >= rule.min;
        };

        this.validate_maxlength = function () {
            pre_length();
            return val.length <= rule.maxlength;
        };

        this.validate_minlength = function () {
            pre_length();
            return val.length >= rule.minlength;
        };

        this.validate_numeric = function () {
            return $.isNumeric(val);
        };

        this.validate_required = function () {
            var real = $.trim(val);
            if (!real && real !== 0)
                return false;
            return true;
        };

        this.validate_pattern = function () {
            /** 这两行有点晕😷 */
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        };

        // 用于完成this.validate_max或this.validate_min的前置工作
        function pre_max_min(val) {
            val = parseFloat(val);
        };
        // 用于完成this.validate_maxlength或this.validate_minlength的前置工作
        function pre_length(val) {
            /**为什么val.toString()会失败？ */
            val = toString(val);
        };
    }
})