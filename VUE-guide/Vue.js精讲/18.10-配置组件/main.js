Vue.component('like',{
    template:'#like_component_tmp',
    data: function(){
        return{
            like_count:10,
            liked: false
        }
    },
    methods: {
        like_toggle: function(){
            if(!this.liked){
                this.like_count++;
            }else{
                this.like_count--;
            }
            this.liked=!this.liked;
        }
    }
})

new Vue({
    el:'#app'
})





















// Vue.component('like',{
//     template:'<button @click="like_toggle">👍{{like_count}}赞</button>',
//     data: function(){
//         return {
//             like_count:10
//         }
//     },
//     methods:{
//         like_toggle: function(){
//             this.like_count++;
//         }
//     }
// })

// new Vue({
//     el:'#app',
// })

























// Vue.component('like', {
//     template: '<button @click="toggle_like()">👍 {{ like_count }}赞</button>',
//     data: function () {
//         return {
//             like_count: 10,
//         }
//     },
//     methods:{
//         toggle_like: function(){
//             this.like_count++;
//         }
//     }
// }
// )

// new Vue({
//     el: '#app'
// })