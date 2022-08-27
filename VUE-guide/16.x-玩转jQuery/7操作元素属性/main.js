$('#a')
    .attr('href','http://baidu.com')
    // .text('百度')
    .prop('text','百度');

var t=$('#a').prop('text');
console.log(t)