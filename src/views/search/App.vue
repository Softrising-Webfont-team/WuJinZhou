<template>
  <div class='search'>
    <div class="inputBox">
      <input type="text" name="" v-model="value" placeholder="输入xxxx查询">
      <span class="searchIcon" @click="getData" @keyup.enter="getData">
        <sicon name="search" scale="2.8"></sicon>
      </span>
    </div>
    <div class="content">
      <span class="txt">
        {{this.txt}}
      </span>
      <span class="loading">
        <loading v-if="this.show"></loading>
      </span>
    </div>
    <p class="address">{{this.url}}</p>
  </div>
</template>

<script type="text/javascript">
  import loading from './components/Loading.vue'
  export default{
    data(){
      return{
        txt:'',
        txt1:'正在上链',
        txt2:'上链完成',
        show:false,
        res:'',
        url:'',
        timer:'',
        value:''
      }
    },
    methods:{
      getData() {
        if(this.value == '') {
          return;
        }
        this.txt = this.txt1;
        this.show = !this.show;
        // this.res = this.$api.getData('/company?name=七色纺快时尚有限责任公司');
        this.timer = setTimeout(()=>{
          this.txt = this.txt2;
          this.show = !this.show;
          this.url = this.res;
        }, 3000)
      }
    },
    components: {
      loading
    },
    mounted() {
      
    }
  }
</script>

<style lang='less' scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .inputBox {
    position: relative;
    margin: 0 auto;
    width: 510px;
    height: auto;
    text-align: center;
    margin-top:220px;
    input {
      border: 2px solid #4EA1C7;
      outline: none;
      width: 510px;
      height: 42px;
      padding: 1px 5px;
      color: #7b7d87;
    }
    .searchIcon {
      position: absolute;
      top:8px;
      right: 5px;
      display: inline-block;
      color: #4EA1C7;
    }
  }
  .content {
    max-width: 100px;
    height:50px;
    margin:0px auto;
    margin-top: 70px;
    text-align:center;
    position: relative;
    .txt {
      display: inline-block;
      font-size: 25px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .loading {
      position: absolute;
      top:5px;
      left:55px;
      width: 100px;
    }
  }
  .address {
    text-align:center;
    margin-top: 40px;
    font-size: 28px;
  }
</style>