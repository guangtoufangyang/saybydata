<template>
    <div style="width:100%;height:auto;margin:0;padding:0;">
        <div class="div_link_rank_content" style="width:100%;">
            <div v-for="(d) in json_data" :key="d.title" style="width:50%;float:left;text-align:left;">
              <a :href="d.url">[{{d.date}}][{{d.site}}]{{d.title}}</a>
            </div>
            <div style="clear:both"></div>
        </div>
        <div style="clear:both"></div>   
    </div>
</template>

<script>
  export default {
    name: 'ViewAttrV3',
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