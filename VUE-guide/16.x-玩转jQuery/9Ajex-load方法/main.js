var trigger = $('#trigger');
var card = $('#card');
var loaded = false;

trigger.on('click',
    function () {
        if (card.is(':visible')) {
            card.slideUp();
        } else {
            if (!loaded) {
                card.load('card.html');
                loaded = true;
            }else{
                card.slideDown;
            } 
        }
    })

    //不能用 没报错 mmp