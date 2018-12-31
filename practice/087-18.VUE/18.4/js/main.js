var app = new Vue({
    el: '#app',
    methods: {
        onClick: function () {
            console.log('clicked');
        },
        onEnter: function () {
            console.log('mouse enter');
        },
        onOut: function () {
            console.log('mouse leave');
        },
        onSubmit:function(e){
            console.log('submited');
        },
        keyPress:function(){
            console.log('key pressed');
        },
        onEnter:function(){
            console.log('entered');
        },
    }
})