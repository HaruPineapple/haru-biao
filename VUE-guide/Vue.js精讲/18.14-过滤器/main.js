Vue.filter('currency',function(val,unit){
    unit = unit||'元';
    val = val||0;
    return val + unit;
})

Vue.filter('meter',function(val,unit){
    val=val||0;
    unit=unit||'m';
    return (val/1000).toFixed(2) + unit;
})

new Vue({
    el:'#app',
    data:{
        price:10,
        length:10,
    }
})