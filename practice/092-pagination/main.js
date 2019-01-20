; (function () {
  'use strict';

  biaoPage.boot(
    {
      selector: '#a',
      //amount：一共有多少条搜索结果
      amount: 50,
      //limit：每页显示多少条搜索结果
      limit: 10,
      currentPage:2,
      //当页面发生改变的时候，把page传回
      onChange(page, state) {
        console.log(page);
      },
    })

    biaoPage.boot(
      {
        selector: '#b',
        //amount：一共有多少条搜索结果
        amount: 150,
        //limit：每页显示多少条搜索结果
        limit: 10,
        currentPage:5,
        //当页面发生改变的时候，把page传回
        onChange(page, state) {
          console.log(page);
        },
      })

  //biaoPage.render();
})();
