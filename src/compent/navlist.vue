<template>
    <header>
       <p>小红书</p>
       <p class="search"><input type="text" placeholder='大家都在搜"再见漫威之父"'></p>
       <ul>
         <li  v-for="(item,index) in mes" :key="item" :class="{active:ind==index}" @click="dian(index)">
             {{item}}
        </li>
       </ul>
    </header>
</template>

<script>
export default {
   data(){
       return{
         ind:0,  
         mes:["推荐","附近","视频","美食","旅行","男士穿搭"]    
       }
    },
    methods:{
       dian:function(index){
           this.ind = index;
       }
    },
    component:{
      
    }
}
</script>

<style lang="scss">
header{
    width: 100%;
    flex-shrink: 0;
    .search{
        width: 100%;
        height: 45px;
        padding: 0 10px;
        input{
            outline: none;
            width: 100%;
            height: 100%;
            background: #f5f5f5;
            border-radius: 25px;
            padding: 0 10px;
            font-size: 20px;
            color: #b8b8b8;
        }
    }
   p{
        color: black;
        line-height: 45px;
        text-align: center;
        font-size: 20px;
    }
    ul{
        display: flex;
        height: 45px;
        justify-content: space-between;
        align-items:center;
        text-align: center;
        border-top:1px solid #fcfcfc;
        li{
            flex: 1;
            color: #a5a5a5;
            font-size: 16px;
            &.active{
                color: red;
            }
        }
    }
}
</style>
