<template>
     <div class="box">
       <!-- 全局组件插件 -->
       <hanling/> 

      <!-- <div v-title="'钩子函数标题'">钩子函数</div>
      <div v-hide="false">隐藏</div>
      <p>{{'guolvqi' | upcase }}</p> -->
     <!-- <navlist/>
     
     <bottom/> -->
      
     <!-- <list/> -->

     <h2>单选多选框</h2>
                        <!-- //绑定子组件传来的值 -->
     <checkbox v-bind:options="list" v-model="checked1" type="radio"/>
     <p>选择的有{{checked1}}</p> 

     <superstar/>
     
     <!-- 点击让子组件显示   -->
     <button @click="show">弹出框</button>
     <!-- 语法糖。默认是不显示的 -->
     <transition name="fold">
     <tab :isShoww.sync="isShow" v-show="isShow" title="我叫弹框" class="redred">
       <!-- 默认插槽接收内容   -->
       <p>漂亮,美丽,购物 </p>
       <!-- 具命插槽 -->
       <template  slot="girl">
           I am a girl !
       </template>
       <!-- 作用域插槽 -->
       <template slot-scope="a">
           {{a}}   
       </template>
     </tab>
     </transition>   
    
 
    
     <switchs :citys="citys" v-on:childvalue="childvalue"/>
      <p class="list">
        <span v-for="list in city" :key="list">
            {{list}}
        </span>
     </p>
     {{name}}
   

    </div>
    
</template>

<script>


export default {
    //数据
    data(){
        return{
           list:[
               {text:"one"},
               {text:"two"},
               {text:"three"},
               {text:"four"}
           ],
           checked1:["one"],
           isShow:false,
           city:["北京","天津"],
           citys:["北京","天津","上海","深圳","广州"],
           name:""
        }
    },
    //注册
    components:{
       
      
    },
    //方法
    methods:{
       show(){
           this.isShow = true;
       },
       changeIsshow(bol){
           this.isShow = bol;
       },
       childvalue(value){
          this.name = value
       }
    
    },
    //属性
    computed:{

    },
    //监听
    watch:{

    }

}
</script>

<style lang="scss">
.box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
.redred {
    width: 300px;
    height: 600px;
    transform: translate3d(0, 100px, 0);
}
.fold-enter-active, .fold-leave-active {
    transition: all .5s;
}
.fold-enter, .fold-leave-active {
    transform: translate3d(0, 0, 0);
}
.list{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
}
</style>
