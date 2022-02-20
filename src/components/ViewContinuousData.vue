<template>
<div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
    <div class="content-data" style="text-align:left;width:100%;margin:0;padding:0;height:auto;font-size:18px;margin-left:9px;line-height:20px;border-left:2px solid Khaki;padding-left:25px;padding-top:10px;padding-bottom:10px;">
        <div class="div_link_rank_title">持续事件</div>
        <div class="div_link_rank_content" style="width:100%;">
            <div v-for="(d) in json_data" :key="d.title">
              <a :href="d.url" v-if="d.url!=''">{{d.title}}[{{d.start_date}}]</a>
              <a v-if="d.url==''">{{d.title}}[{{d.start_date}}]</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'ViewContinuousData',
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