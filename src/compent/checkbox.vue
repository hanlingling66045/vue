<template>
    <div>
        <label v-for="(item,index) in options" :key="index">
            <input :type="type" v-model="newval" :value="item.text" name="name"/>
            <span>{{item.text}}</span>
           
        </label>
         {{newval}}
    </div>
</template>

<script>
export default {
 //<!-- 复选框 -->
 //接收
 props:{
     //传来的数据
     options:Array,
     //类型
     type:{
         type:String,
         default:'checkbox'
     },
     value:{
         type:[Array,String],
         default:'checkbox'
     }
   },
   watch:{
       newval(value){
           console.log(value);
           this.$emit('input',value)
       },
       value(val){
           this.newval = val
       }
   },
   data(){
       return {
           //类型是多选添加颜色[] 不是多选就为''
           newval: this.type == 'checkbox' ? [] : ''
       }
    },
   //传值不传值的时候
   created() {
       if(this.value){
           this.newval = this.value
       }
    }
}
</script>

<style lang="scss">
    label{
       input{
           display: none;
           &:checked + span{
               background: pink;
           }
          }
       
       span{
           display: inline-block;
           height: 30px;
           width: 80px;
           line-height: 30px;
           border-radius: 30px;
           font-size: 14px;
           text-align: center;
       }
    }
</style>


