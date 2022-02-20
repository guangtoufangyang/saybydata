<template>

<div class="div_main_frame div_main_frame_footer">

    <div class="div_main_frame" style="padding-left:20px;line-height:28px;text-align:center;">
      <el-row align="middle">
        <el-col :span="24">
        <a href="http://www.miitbeian.gov.cn/">粤ICP备13040399号-1</a>
        </el-col>
      </el-row>

    <el-row align="middle">
      <el-col :span="24">
          <p>Copyright 2022 100pian.com 版权所有</p>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="24">
          <p>本站数据，仅供参考！</p>
      </el-col>
    </el-row>
    </div>
</div>

</template>

<script>

export default ({
    name: 'ViewFooter',
})
</script>

<style>
.div_main_frame_footer{
    background-color:#EEEEEE;
}

</style>