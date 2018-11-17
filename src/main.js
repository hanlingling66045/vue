//入口文件

import Vue from 'vue';
import App from "./App.vue";
//引入全局
import hanling from "./plugin/hanling.js";
Vue.use(hanling);
//传入组件内
new Vue({
    //渲染节点
    el:'.box',
    //注册组件
    components:{
       App
    },
    //模板 渲染
    template:'<App/>'  
})
