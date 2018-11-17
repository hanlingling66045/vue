<template>
    <div class="bigbox">
      
        <p class="one"><span>{{title}}</span><span v-on:click="click">{{show}}</span></p>
        <p v-if="shows">
            <img src="../images/a.jpg" alt="">
            <span  v-on:click="yin">×</span>
        </p>
    </div>
</template>

<script>
export default {
   data(){
      return{
          title:"显示",
          show:"点击",
          shows:false,
          yincang:true
      }
   }, 
   methods:{
       click:function(){
           this.shows = true
       },
       yin:function(){
           this.shows = false
       }
   }
}
</script>

<style lang="scss">
 .bigbox{
    
     overflow: hidden;
     overflow-y: scroll;
 }  
 .one{
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 45px;
 }
 p{
     img{
         width: 50px;
         height: 50px;
     }
 }
</style> 