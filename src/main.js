// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import normalize from 'normalize.css'
import animate from 'animate.css'
require('@static/plugins/lib-flexible-master/build/flexible_css.debug.js')
require('@static/plugins/lib-flexible-master/build/flexible.debug.js')


// import ElementUI from 'element-cssui'
// import 'element-ui/lib/theme-default/index.css'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';    // 使用 CSS
// import '../my-theme/index.less'
// Vue.use(ElementUI)
// Vue.use(iView);

//最终决定应用淘宝的响应式js文件标准，其它响应式分屏


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
