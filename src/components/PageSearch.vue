<template>
    <div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">

    <div class="fastweb_div_middle" style="width:1500px;height:auto;">
          <ViewAttrData :json_data="json_data_chanpin" />
          <ViewAttrData :json_data="json_data_zhishu" />
          <ViewAttrData :json_data="json_data_gudong" />
          <ViewAttrData :json_data="json_data" />
    </div>

    <div class="fastweb_div_middle" style="width:1500px;height:auto;">
          <ViewTabs />
    </div>

    </div>

    
    
    <ViewFooter/>
</template>

<script>

import ViewFooter from '@/components/ViewFooter.vue'
import ViewTabs from '@/components/ViewTabs.vue'
import ViewAttrData from '@/components/ViewAttrData.vue'
import { getCurrentInstance } from 'vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"

export default 
{
    name: 'PageSearch',
    components: {
        ViewFooter,
        ViewTabs,
        ViewAttrData
    },
    data () {
      return {
        title: '',
        entity: '',
        datas: '',
        json_data: {
            name: '',
            nodes: [],
        },
        json_data_zhishu: {
            name: '',
            nodes: [],
        },
        json_data_chanpin: {
            name: '',
            nodes: [],
        },
        json_data_gudong: {
            name: '',
            nodes: [],
        },
        json_data_all: {
            name: '',
            nodes: [],
        },
        message: '',
      };
    },
    setup(){
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      return {host};
        
    },
    beforeRouteEnter(to, from, next){
      console.log("beforeRouteEnter");
      //this.getDatas("123");
      next(vm => {
        console.log("beforeRouteEnter000");
        vm.title = to.meta.title;
        let url = vm.setRequestUrl(to.fullPath);
        vm.getDatas(url, vm.pageNum, vm.pageSize);
      });
    },
    beforeRouteUpdate(to){
      console.log("beforeRouteUpdate123");
      let url = this.setRequestUrl(to.fullPath);
      //this.getDatas(url, this.pageNum, this.pageSize);
      //return true;
    },
    methods: {
      getDatas(url){
        var type = this.$route.query.type
        var code = this.$route.query.code
        var name = this.$route.query.name
        console.log("getDatas:" + url);
        
        var api_url = this.host.concat("/api/display_code_data?type=").concat(type).concat("&code=").concat(code).concat("&name=").concat(name).concat("&relation=1001");
          this.axios.get(api_url)
          .then(response => {
            if((response.status == 200) && (response.data.result == 0)){
              this.datas = response.data.data;
              this.json_data_all = JSON.parse(response.data.data);
              var tag1001 = 0;
              var tag1003 = 0;
              var tag2002 = 0;
              var tag2001 = 0;
              for(var i=0;i < this.json_data_all.nodes.length; i++){
                if (this.json_data_all.nodes[i].id == "1001"){
                  this.json_data = JSON.parse(this.json_data_all.nodes[i].data);
                  tag1001 = 1;
                } else if (this.json_data_all.nodes[i].id == "1003"){
                  this.json_data_gudong = JSON.parse(this.json_data_all.nodes[i].data);
                  tag1003 = 1;
                } else if (this.json_data_all.nodes[i].id == "2002"){
                  this.json_data_chanpin = JSON.parse(this.json_data_all.nodes[i].data);
                  tag2002 = 1;
                } else if (this.json_data_all.nodes[i].id == "2001"){
                  this.json_data_zhishu = JSON.parse(this.json_data_all.nodes[i].data);
                  tag2001 = 1;
                }
              }

              if (0 == tag1001) {
                this.json_data = {};
              }
              if (0 == tag1003) {
                this.json_data_gudong = {};
              }
              if (0 == tag2002) {
                this.json_data_chanpin = {};
              }
              if (0 == tag2001) {
                this.json_data_zhishu = {};
              }


              //this.json_data_chicang = json_data_all.
              this.entity = this.json_data.name;
              this.title = this.json_data.name;
            }
          })
          .catch(error => alert(error));
        this.message = '';
        
      },
      //动态设置服务端数据接口的请求URL
      //设置后回导致重复调用上次的请求
      
      setRequestUrl(path){
        let url = path;
        console.log("path:", path);
        return url;
      },
    },
    watch: {
      // 如果路由发生变化，再次执行该方法
      "$route": "getDatas"
    }
}

</script>

<style scoped>

.div_entity_data {
    display:table;
}

.div_entity_main {
    height:100%;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
}



.left_bracket_container {
  width:100%;
  height:100%;
  padding-top:20px;
  padding-bottom:20px;
  height:100%;
  position:absolute;
  left:43%;
  top:0;
  bottom:0;
}

.right_bracket_container {
  width:100%;
  height:100%;
  padding-top:20px;
  padding-bottom:20px;
  height:100%;
  position:absolute;
  top:0;
  right:43%;
  bottom:0;
}

.bracket_container {
  height:100%;
  width:100%;
  margin:0px;
  padding:0px;
}

.left_bracket_line_container {
  width:16px;
  height:100%;
  position:relative;
  float:left;
}

.right_bracket_line_container {
  width:16px;
  height:100%;
  position:relative;
  float:right;
}

.bracket_line {
  width:12px;
  border-top:1px solid black;
  height:0px;
  text-align:center;
  margin: auto;
  position:absolute;
  left: 0;
  top: 0;
  bottom:0;
  right: 0;
}
.bracket_left_edge {
  width:10px;
  height:100%;
  line-height:100%;
  text-align:center;
  border-left:1px solid black;
  border-top:1px solid black;
  border-bottom:1px solid black;
  float:right;
}
.bracket_right_edge {
  width:10px;
  height:100%;
  line-height:100%;
  text-align:center;
  border-right:1px solid black;
  border-top:1px solid black;
  border-bottom:1px solid black;
  float:left;
}

</style>
