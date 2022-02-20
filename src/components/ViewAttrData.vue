<template>
<div v-if="json_data.name" class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
    <div style="width:100%;height:auto;margin:0;padding:0;">
        <div class="title" style="height:40px;margin:0;padding:0;width:100%;background:#FF2D2D">
            <div class="title-name" style="width:100%;margin:0;padding:0;height:15px;font-size:18px;margin-left:6px;line-height:40px;text-align:left">
                <p style="margin:0"><strong>{{json_data.name}}</strong></p>
            </div>
        </div>
        <div class="content-data lanmu20" style="text-align:left;width:100%;margin:0;padding:0;height:auto;font-size:18px;margin-left:9px;line-height:20px;padding-left:25px;padding-top:10px;padding-bottom:10px;">
            <div v-for="(lanmu,index) in json_data.nodes" :class="'lanmu' + (index%5)" :key="lanmu.name" style="width:20%;float:left;">
                
                <div class="div_link_rank_title">{{lanmu.name}}</div>
                <div class="div_link_rank_content" style="width:100%;">
                    <div v-for="(n) in lanmu.nodes" :key="n.name" style="width:50%;float:left;">
                      <!--a :href="n.url">{{n.name}}</a-->
                      <p>{{n.name}}{{n.code}}</p>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
            <div style="clear:both"></div>    
        </div>
        
    </div>
</div>
</template>

<script>
  export default {
    name: 'ViewAttrData',
    data() {
      return {
      };
    },
    props: {
      json_data: {
        type: Object,
        default: () => {}
      }
    },
  };
</script>

<style>

.lanmu0 {
    clear:left;
}


</style>