Vue.component('alert',{
    template:'<button @click="on_click">t</button>',
    methods:{
        on_click:function(){
            alert('Y');
        }
    }
})

new Vue({
    el:'#app'
})