const highlight = {
    inserted: function (el, binding) {
        highlight.load(el, binding)
    },
    update: function (el, binding) {
        highlight.load(el, binding)
    },
    load: function (el, binding) {
        const { value, keyword, color } = binding.value;
        if (!value) return '';
        el.innerHTML = value.replace(new RegExp(keyword,'ig'),(a)=>{
            return `<span style="color:${color}">${a}</span>`
        })
    }
}
export default highlight;
