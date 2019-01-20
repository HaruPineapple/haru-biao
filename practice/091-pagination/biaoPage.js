; (function () {
    'use strict';

    const DEFAULT_CONFIG = {
        limit=10,
    };
    let config;

    window.biaoPage = { boot, render, };

    function boot(settings) {
        config = Object.assign({}, DEFAULT_CONFIG, settings);
    };

    console.log(config);

    function render() { };
})();