<template>

<div class="div_page_100" style="width:100%;background-color:#EEEEEE;">
  <div class="div_page_top_middle" style="height:50px;text-align:left;width:1500px;">
    <el-row align="middle">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item :to="{ path: '' }"></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/overall' }">大事记</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/market' }">市场</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/about' }">关于我们</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '' }"></el-breadcrumb-item>
      </el-breadcrumb>
      </el-row>
  </div>
</div>
<div class="div_page_100" style="width:100%;background-color:#ffffff">

<div class="div_page_top_middle" style="width:800px;">
    <div style="text-align:left;float:left;">
      <img src="~@/assets/search_logo.png" style="width:300px;height:100px;">
    </div>
<div class="div_page_top_middle" style="padding-top:35px;padding-bottom:35px;float:left;width:500px;">

<div class="headerSearch" style="float:left;">
    <input id="search_id" placeholder="输入股票代码或名称，如:[600][银行]" type="search" v-model.trim="keyword" v-on:focus="focus()" autocomplete=“off”>
    <button v-bind:disabled="dis">输入并选择</button>
    <div class="search_menu">
      <ul class="input_suggest">
    <li v-for="input_val in input_list" :key="input_val" @click.left="select_li(input_val)">
      <!--button @click="select1(input_val)">{{input_val}}</button-->
      {{input_val}}
      <!--span v-on:click.up="select1(input_val)">{{input_val}}</span-->
      <!--a :href="'/search?wd=' + input_val">{{ input_val }}</a-->
    </li>
    </ul>
    </div>
</div>

<div style="clear:both"></div>
</div>
<div style="clear:both"></div>
</div>
</div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default ({
    name: 'ViewHead',
    data () {
      return {
        keyword: '',
        input_list:[]
      };
    },
    setup(){
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      return {host}
    },
    methods: {
      search(){
        // 当查询关键字与当前路由对象中的查询参数wd值不同时，才调用$router.push方法
        if(this.keyword != this.$route.query.wd)
            this.$router.push({path: '/search', query: {wd: this.keyword}})
      },

      blur:function() {
        console.log("blur:");
        this.input_list=[];
      },
      focus:function(){
        if(document.querySelector('#search_id')==document.activeElement){
          console.log("focus:");
          this.fuzzy_search(this.keyword.trim());
        }
      },
      fuzzy_search:function(value){
          //this.input_list=["a", "b", "c"];
          //return;
          
          console.log("fuzzy_search:" + value);
          var that =this;
          that.input_list=[];
          if(!value){
              that.input_list=[];
              return;
          }

          var url = this.host.concat("/api/display_suggest?word=").concat(value);
          this.axios.get(url)
          .then(response => {
            if(response.status == 200){
            //if(response.data.code == 200){
              this.input_list = response.data.data;
            }
          })
          .catch(error => alert(error));

          //调取接口
          that.input_list=[];
      },

      select_li:function(input_val) {
        console.log("select:" + input_val);
        var lists = input_val.split("|")
        console.log("select1:" + lists[0] + lists[1] + lists[2]);
        /*
        if((lists[0] == "股票") || (lists[0] == "基金")) {
          if(/^\d+$/.test(this.keyword)) {
            this.keyword = lists[1];
          } else {
            this.keyword = lists[2];
          }
        } else {
          this.keyword = lists[2];
        }*/
        //this.keyword = input_val;
        this.$router.push({
          path:'/search',
          name:'search',
          query: {
            type: lists[0],
            code: lists[1],
            name: lists[2],
          }});
        this.input_list=[];
      }

    },
    watch:{
        keyword:function(){
            console.log("watch:");
            this.focus();
        },
    },
})

</script>

<style>


.bottom_line {
    padding: 2px;
    background-color: #409EFF;
}
</style>

<style scoped>
.headerSearch {
    display: inline-block; 
    position: relative;
}
.headerSearch input {
    width: 400px;
    height: 40px;
    font-size:20px;
}

.headerSearch button{
    position: absolute;
    right: 2px;
    top: 2px;
    width: 100px;
    height: 36px;
    margin: 0;
    border: none;
    color: red;
    cursor: pointer;
}

.search_menu {
  background-color: gold;
  top:40px;
  width:100%;
  height:auto;
  border:1ps solid blue;
  position: absolute;
  text-align: left;
  z-index: 10;
}

.search_menu ul{
  margin-bottom: 0;
  list-style-type: none;
}

.search_menu li {
  padding: 5px;
  font-size: 1.1em;
  cursor: pointer;
}

.search_menu li:hover {
  background-color: beige;
}

.search:hover .search_menu {
  display: block;
}


input::-webkit-input-placeholder{
    color:#DDDDDD;
    font-size:16px;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#DDDDDD;
    font-size:16px
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#DDDDDD;
    font-size:16px
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#DDDDDD;
    font-size:16px
}

</style>