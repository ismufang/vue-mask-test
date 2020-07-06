import maskComponent from './vue-mask-test.vue' // 导入组件
let $vm
const Mask = {
    install(Vue, options) {
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
        // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
        // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
        if (!$vm) {
            const MaskPlugin = Vue.extend(maskComponent);

            $vm = new MaskPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.isShow = false;

        let mask = {
            show(text) {
                $vm.isShow = true;

                // $vm.text = text;
            },
            hide() {
                // console.log('mask隐藏');
                // console.log($vm);
                $vm.isShow = false;
                // console.log($vm.isShow);
            }
        };

        if (!Vue.prototype.$mask) {
            Vue.prototype.$mask = mask;
        }

        Vue.mixin({
            created() {
                this.$mask = Vue.prototype.$mask;
            }
        })
    }


}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Mask);
}

export default Mask