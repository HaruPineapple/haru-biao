var card = $('#card');
var cardTrigger = $('#card-trigger');

// cardTrigger.on('click',()=>{
//     if(!card.hasClass('hide')){
//         card.hide();
//         card.addClass('hide');
//     }
//     else{
//         card.show();
//         card.removeClass('hide');
//     }
// })
cardTrigger.on('click',()=>{
    if(card.is(':visible')){
        card.slideUp();
    }else{
        card.slideDown();
    }
})
card.on('mouseenter',()=>{
    card.addClass('active');
})
card.on('mouseleave',()=>{
    card.removeClass('active');
})
// card.on('mouseenter',()=>{
//     card.css('color','red');
// })
