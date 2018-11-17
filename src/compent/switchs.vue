<template>
    <div> 
       <p>
           <span v-for="item in citys" :key="item" @click="name(item)">
               {{item}}
           </span> 
      </p>
     
    </div>
    
</template>

<script>
export default {
    props:{
        citys:Array,
        type:{
            type:String,
        }
    },
    data(){
       return{
           value:""
       } 
    },
    methods:{
        name(item){
            this.value = item
            this.$emit("childvalue",this.value)
        }
    }
}
</script>

<style>

</style>
