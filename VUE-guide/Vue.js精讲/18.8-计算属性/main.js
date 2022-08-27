new Vue({
    el:'#app',
    data:{
        chinese:90,
        math:80,
        english:75,
        total:'',
    },
    computed:{
        sum:function(){
            return this.math+this.chinese+this.english
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    },
    })