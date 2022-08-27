$('.grandpa').find('.child').css('border','2px solid #999');
$('.child').parent().css('border','solid 2px #666');
$('.child').parents('.grandpa').css('border','dashed 2px red');
$('.child').filter('.not-gay').css('background','purple')