;(function () {
    'use strict';
  
    new Vue({
      el: '#app',
      data: {
        keyword: '西游',
        result: {},
      },
      methods: {
        search: function () {
          var me = this;
          $.ajax({
            url: 'https://api.douban.com/v2/book/search?q=' + this.keyword,
            dataType: 'jsonp',
          }).then(function (r) {
            me.result = r;
          })
        }
      },
    });
  })();