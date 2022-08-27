//popup和tooltip都要用到显示和隐藏。所以都需要一个满足显示和隐藏的方法，或者储存这种功能的属性

//弹出层
var base = {
    methods: {
        toggle: function () {
            this.visible = !this.visible;
        },
        hide: function () {
            this.visible = false;
        },
        show: function () {
            this.visible = true;
        }
    },
    data: function () {
        return {
            visible: false,
        }
    }

}

Vue.component('popup', {
    //toggle是方法，visible是属性
    template: `
    <div>
        <button @click="toggle">显示/隐藏</button>
        <div v-if="visible">
            <h4>title</h4>
            <span @click="hide">x</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nihil, reprehenderit voluptates aspernatur soluta numquam? Officia accusamus magnam corrupti illo exercitationem hic laboriosam. Architecto ullam, nisi tempora reiciendis iusto ea?
        </div>
    </div>
    `,
    data: function () {
        return {
            visible: true
        }
    },
    mixins: [base],
})
//提示框
Vue.component('tooltip', {
    template: `
        <div>
            <span @mouseenter="show" @mouseleave="hide">展开讲讲</span>
            <div v-if="visible">
            事情是这样的。。。
            </div>
        </div>
    `,
    mixins: [base]

})
new Vue({
    el: '#app',
})