var form = $('form#search');
var input = $('input#username');
// var button = $('button');
var result = $('#result');
var username;

form.on('submit', function (e) {
    e.preventDefault();
    username = input.val();
    $.ajax({
        url: 'https://api.github.com/users/' + username,
        methods: 'get',
        success: function (data) {
            var html;
            html =
                '<div>用户名： ' + data.login + '</div>' +
                '<div>介绍： ' + (data.bio || '无') + '</div>';

            result.html(html);

        },
        error: function () {
            var html;
            html = '<div>查无此人</div>'

            result.html(html);
        },
    })
})

