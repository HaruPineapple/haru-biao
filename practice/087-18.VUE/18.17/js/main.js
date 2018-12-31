Vue.component('tooltip', {
    template:`
    <div>
        <span @mouseenter="show" @mouseleave="hide">suda</span>
        <div v-if="visible">
        菅田将晖
        </div>
    </div>
    `,
    methods:{
        show:function(){
            this.visible=true;
        },
        hide:function(){
            this.visible=false;
        },
    },
    data:function(){
        return{
            visible:false,
        }
    }
})

Vue.component('popup', {
    template: `
    <div>
        <button @click="toggle">Popup</button>
        <div v-if="visible">
            <h4>Title</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellat aliquid? Architecto at et sit minus blanditiis deserunt soluta. Praesentium sed laboriosam recusandae voluptas odit eligendi animi cupiditate nam. Alias.       
        </div>
    </div>
    `,
    methods:{
        toggle:function(){
            this.visible=!this.visible;
        }
    },
    data: function(){
        return{
            visible:false,
        }
    }
})

new Vue({
    el: '#app',
    data: {

    }
})