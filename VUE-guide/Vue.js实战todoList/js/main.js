; (function () {
    'use strict';

    function copy(obj) {
        return Object.assign({}, obj);
    }
    new Vue({
        el: '#main',
        data: {
            list: [],
            current: {
                // title:'...',
                // completed: false,
                // desc:'...',
                // remind_at:'2020-10-01',
            }
        },
        mounted: function () {
            this.list = ms.get('list') || this.list;
        },
        methods: {
            merge: function () {
                var is_update, id;
                is_update = id = this.current.id;
                if (is_update) {
                    //通过判断有无id来判断，有id的需要更新
                    var index = this.find_index(id);
                    Vue.set(this.list, index, copy(this.current));

                } else {
                    //没id的添加
                    var title = this.current.title;
                    if (!title && title !== 0) return;
                    var todo = copy(this.current);
                    todo.id = this.next_id();
                    this.list.push(todo);
                }
                this.reset_current();
            },
            updata: function () { },
            remove: function (id) {
                var index = this.find_index(id);
                this.list.splice(index, 1)
            },
            next_id: function () {
                return this.list.length + 1;
            },
            set_current: function (todo) {
                this.current = copy(todo);
            },
            reset_current: function () {
                this.set_current({});
            },
            find_index: function (id) {
                return this.list.findIndex(function (item) {
                    return item.id == id;
                })
            }
        },
        watch: {
            list: {
                deep: true,
                handler: function (n, o) {
                    //n=new_value,o=old_value
                    if (n) {
                        ms.set('list', n)
                    } else {
                        ms.set('list', [])
                    }
                }
            }
        }
    })
})();

//接下来22.8控制完成状态课