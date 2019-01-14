; (function () {
    'use strict';

    window.vali = {
        isUsername,
        isEmail,
        isPhone,
        isPassword,
        betweenLength,
        between,
        positive,
    };


        function isUsername(str) {
            if (
                !betweenLength(str, 4, 12) ||
                str.includes('shit')
            ) return false;

            return true;
        };

        function isEmail(str) {
            if (!str.includes('@'))
                return false;

            return true;
        };

        function isPhone(str) {
            if (
                (str.length != 11 &&
                    str.length != 13 &&
                    str.length != 14) ||
                !str.startsWith('1')
            ) return false;

            return true;
        };

        function isPassword(str) {
            if (!betweenLength(str, 6, 64))
                return false;

            return true;
        };

        function betweenLength(str, min, max) {
            return between(str.length, min, max);
        };

        function between(num, min, max) {
            return num >= min && num <= max;
        };

        function positive(num) {
            return num >= 0;
        }
    ;

})();