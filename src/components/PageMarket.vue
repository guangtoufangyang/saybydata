<template>
<div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
<div class="fastweb_div_middle" style="width:1500px;text-align:center;">
    <div class="div_main_frame" style="width:80%;float:left;margin:auto;">
        <div class="div_main_frame" style="width:100%;float:left;margin:0px;padding:0px;">
            <ViewMarketData :json_data="json_data" />
        </div>
    </div>
    <div class="div_main_frame" style="width:20%;float:left;margin:auto">
        <div class="div_main_frame" style="width:100%;float:left;margin:0px;padding:0px;">
            <ViewContinuousData :json_data="json_continuous_data" />
        </div>
    </div>
       
    <div style="clear:both"></div>
</div>
</div>
<ViewFooter/>
</template>

<script>
import ViewFooter from '@/components/ViewFooter.vue'
import ViewMarketData from '@/components/ViewMarketData.vue'
import ViewContinuousData from '@/components/ViewContinuousData.vue'
import { getCurrentInstance } from 'vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"

  export default {
    name: 'PageMarket',
    components: {
        ViewFooter,
        ViewMarketData,
        ViewContinuousData
    },
    data() {
      return {
        json_data:[],
        json_continuous_data:[],
      };
    },
    setup(){
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      return {host}
    },
    mounted() {
      var api_url = this.host.concat("/api/display_market");
      this.axios.get(api_url)
      .then(response => {
        if((response.status == 200) && (response.data.result == 0)){
          this.json_data = JSON.parse(response.data.data);
        }
      })
      .catch(error => alert("系统错误，请稍后重试"));

      var api_continuous_url = this.host.concat("/api/display_continuous_market");
      this.axios.get(api_continuous_url)
      .then(response => {
        if((response.status == 200) && (response.data.result == 0)){
          this.json_continuous_data = JSON.parse(response.data.data);
        }
      })
      .catch(error => alert("系统错误，请稍后重试"));
    }
  };
</script>