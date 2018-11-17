//全局注册组件
import  tab from "../compent/tab.vue"; 
import  checkbox from "../compent/checkbox.vue"; 
import  list from "../compent/list.vue"; 
import  navlist from "../compent/navlist.vue"; 
import  popout from "../compent/popout.vue"; 

import  superstar from "../compent/superstar.vue"; 
import  switchs from "../compent/switchs.vue"; 
//抛出
export default{
    install(Vue,options){
     //全局  全局组件
     Vue.component('hanling',{
         template:'<div>好好学习</div>'
     })
     //弹框全局组件
     Vue.component('tab',tab);
     Vue.component('checkbox',checkbox);
     Vue.component('list',list);
     Vue.component('navlist',navlist);
     Vue.component('popout',popout);
     
     Vue.component('superstar',superstar);
     Vue.component('switchs',switchs);

    }
}