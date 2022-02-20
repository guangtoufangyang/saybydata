<template>
<div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
    <div v-for="(node) in json_data" :key="node.date" style="width:100%;height:auto;margin:0;padding:0;">
        <div class="title" style="height:20px;margin:0;padding:0;width:100%;">
            <div class="title-tag" style="width:20px;margin:0;padding:0;border-radius:100%;background-color:Khaki;height:20px;float:left;">
            </div>
            <div class="title-name" style="width:auto;margin:0;padding:0;height:15px;float:left;font-size:18px;margin-left:6px;line-height:20px;">
                <p style="margin:0">{{node.date}}</p>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="content-data" style="text-align:left;width:100%;margin:0;padding:0;height:auto;font-size:18px;margin-left:9px;line-height:20px;border-left:2px solid Khaki;padding-left:25px;padding-top:10px;padding-bottom:10px;">
            <div v-for="(lanmu) in node.nodes" :key="lanmu.type" style="width:33%;float:left;">
                <div class="div_link_rank_title">{{lanmu.type}}</div>
                <div class="div_link_rank_content" style="width:100%;">
                    <div v-for="(n) in lanmu.news" :key="n.title">
                      <a :href="n.url">{{n.title}}</a>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'ViewOverallData',
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