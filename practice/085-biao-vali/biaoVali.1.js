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

        between(value, min, max) {
            return this.min(value, min) &&
                this.max(value, max);

        },

        minLength(value, guide) {
            return value.length >= guide;
        },

        maxLength(value, guide) {
            return value.length <= guide;
        },

        betweenLength(value, min, max) {
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
         * 在数组中
         * @param {mix} value 
         * @param {Array} guide 
         */
        in(value, guide) {
            return guide.indexOf(value) !== -1;
        },

        regex(value,regex){
            
        }

    };
    
    console.log(is.startsWith('138','8'));


})();