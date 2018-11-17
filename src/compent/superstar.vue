<template>
    <div>
        <p class="inner-container">
            <span v-for="(item,index) in list" :key="index">
                {{item}}
            </span> 
        </p>
    </div>
</template>

<script>
export default {
      
      data(){
         return{ 
             list:["1","2","3","4","5",],
            }
      },
     
}
</script>

<style lang="scss" scoped>
 div{
  width: 100px;
  height: 20px;  
  overflow: hidden;
}  
.inner-container {
  animation:myMove 3s linear infinite;
  animation-fill-mode: forwards;
}
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150px);
  }
}

</style>
