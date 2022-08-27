// $('.a').css('color','red').css('background','pink');
// $('.b').css({
//     color:'purple',
//     background:'yellow',
// })
// var b=$('.b').addClass('black');
// b.fadeOut(2000);
// b.fadeIn(2000);
// b.hide();
// b.show();
// b.slideUp(2000);
// b.slideDown(2000);
var board = $('#board');
setInterval(twinkle,500);
function twinkle(){
    if(board.hasClass('active'))
        board.removeClass('active');
    else
        board.addClass('active') 
}