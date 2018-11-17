<template>
     <transition name="red">
     <div class="isshow">
         <p>{{title}}</p>
         <slot></slot>
         <p><slot name="girl"></slot></p>
         <p><slot say="你好"></slot></p>
        <input type="button" value="关闭" @click="close" >
     </div>
    </transition> 
</template>
<script>
export default{
   props:{
      title:String
   }, 
   methods:{
       close(){
           this.$emit("update:isShoww",false)
       }
   }
}
</script>
<style lang="scss">
   .isshow{
       width: 300px;;
       height: 600px;
       background: #cccccc;
       
    
   }
</style>
