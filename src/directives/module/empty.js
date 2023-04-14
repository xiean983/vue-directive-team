import Vue from 'vue'
import PageDefaultVue from "@/components/PageDefault.vue";
const empty = {
    inserted: function (el, binding) {
        empty.load(el, binding)
    },
    update: function (el, binding) {
        empty.load(el, binding)
    },
    load: function (el, binding) {
        let { list, img, el: Elclass } = binding.value;
        const _DOM = el.querySelector(`.${Elclass}`);
        if (!_DOM) {
            return
        }
        if (list && list.length > 0) {
            _DOM.style.display = 'block'
            const empty_content = el.querySelector('.empty-data');
            if (empty_content) empty_content.remove()
        } else {
            _DOM.style.display = 'none'
            // 创建空数据缺省页组件实例
            const emptyData = new Vue({
                render: h => h(PageDefaultVue, {
                    props: {
                        img: img
                    }
                })
            }).$mount();
            el.appendChild(emptyData.$el);
        }
    }
}
export default empty;