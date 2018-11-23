<template>
  <div class='search'>
    <div class="title">
      当征信报告的真实性存在疑问时 可通过区块链浏览器查证《最高人民法院关于互联网法院审理案件若干问题的规定》已于2018年9月7日起施行。其中第十一条称，当事人提交的电子数据，通过电子签名、可信时间戳、哈希值校验、区块链等证据收集、固定和防篡改的技术手段或者通过电子取证存证平台认证，能够证明其真实性的，互联网法院应当确认。
    </div>
    <div class="inputBox">
      <input type="text" name="" v-model="value" placeholder="您本次查询的征信报告以及您的查询动作将被区块链存证">
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
    <p class="address" v-if="this.show1">{{this.txt3}}<a :href="this.url" v-if="this.show2">PDF链接</a></p>
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
        txt3:'',
        show:false,
        url:'http://172.20.3.232:3000',
        timer:'',
        value:'',
        show1:false,
        show2:false,
        res:'',

      }
    },
    methods:{
      getData() {
        this.txt3 = '';
        this.show1 = false; 
        this.show2 = false;
        if(this.value == '') {
          return;
        }
        this.txt = this.txt1;
        this.show = !this.show;
        this.$api.getData('/company?name='+this.value)
        .then((res)=>{
          // console.log(res);
          this.res = res;
          // console.log(this.res);
          if (res.length == 0) {
            this.timer = setTimeout(()=>{
              this.txt = this.txt2;
              this.show = !this.show;
              this.txt3 = '数据不存在' ;
              this.show1 = true;
            }, 3000);
          } else {
            this.timer = setTimeout(()=>{
              this.txt = this.txt2;
              this.show = !this.show;
              this.show2 = true; 
              this.url += res[0].pdf_folder;
              this.show1 = true;
            }, 3000)
          }
        })
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
  .title {
    margin:0 auto;
    width: 1000px;
    height: auto;
    margin-top: 70px;
    line-height: 32px;
    font-size: 22px;
  }
  .inputBox {
    position: relative;
    margin: 0 auto;
    width: 700px;
    height: auto;
    text-align: center;
    margin-top:90px;
    input {
      border: 2px solid #4EA1C7;
      outline: none;
      width: 700px;
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