// $('#nickname').focus();
// $('#nickname').select(function(){
//     console.log('YO')
// });

var form = $('#login');
var loginTrigger = $('#login-trigger');
loginTrigger.click(function () {
    form.submit()
})