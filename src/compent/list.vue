<template>
   <main>
    <ul class="listtab">
        <li v-for="(item,index) in mes" :key="index">
           
            <p><img :src="item.img" alt="" class="big" v-lazy="'item.img'"></p>
            <h2>{{item.name}}</h2>
            <p class="last"><span class="left"><img :src="item.head" alt="">{{item.user}}</span><span>❤{{item.num}}</span></p>
        </li>
    </ul>
   </main>
</template>

<script>
export default {
    data(){
        return {
           mes: [
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"},
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"},
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"},
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"},
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"},
               {"img":"../../src/images/big.gif","name":"[精选] ins36款简约风蛋糕!!高清大图留言","head":"../../src/images/head.gif","user":"张嘉倪","num":"1608"}
               ]
        }
    },
    methods:{

    },
}
</script>

<style lang="scss">
    main{
        flex:1;
        background: #f4f8fb;
        overflow: hidden;
        overflow-y: scroll;
        .listtab{
           
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            li{
              padding: 10px;  
              width: 50%;
              background: white;
              display: flex;
              flex-direction: column;
              h2{
                  margin: 10px 0;
                  font-size: 18px;
              }
              .big{
                  width: 100%;
                  height: auto;
              }
              .last{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .left{
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      img{
                          height:58px;
                      }
                  }
              }
            }
        }
    }
</style>
   

