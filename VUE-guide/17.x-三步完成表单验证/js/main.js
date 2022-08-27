$(function () {
    'use strict';
    /**选中页面中所有input[data-rule]*/
    var $inputs = $('[data-rule]')
        , $form = $('#signup')
        , inputs = [];
    $inputs.each(function (index, node) {
        /**解析每一条input的验证规则(tmp:临时) 这一步是在Input里的parse——rule做到的*/
        var tmp = new Input(node);
        inputs.push(tmp)
    })
    $form.on('submit', function (e) {
        e.preventDefault();
        $inputs.trigger('blur');
        for (var i = 0; i < inputs.length; i++) {
            var item = inputs[i];
            var r = item.validator.is_valid();
            if (!r) {
                alert('invalid');
                return;
            }
            alert('valid');
        }
    })


    /**验证（最底层最核心的*/


    //  首先实例化一个input，此时input在内部已经实例化了validator
    // var test = new Input('#test');
    // 调用input内部实例过的validator
    // var valid = test.validator.is_valid();
    // console.log('valid:', valid)
})