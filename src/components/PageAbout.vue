<template>
    <div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
    <div class="fastweb_div_middle" style="width:1500px;text-align:center;">
        
        <div class="about_tile">
            <strong>·声明</strong>
        </div>
        <div class="about_text">
            <el-row align="left" style="text-align:left">
            <el-col :span="24">
                <p>&nbsp;&nbsp;投资有风险，入市须谨慎。投资应当是一个不断学习的过程，本站数据用于学习分析，但不可作为投资依据。</p>
            </el-col>
            </el-row>
        </div>

        <div class="about_tile">
            <strong>·合作</strong>
        </div>
        <div class="about_text">
            <el-row align="left" style="text-align:left">
            <el-col :span="2">
                <p>联系人:</p>
            </el-col>
            <el-col :span="22">
                <p>赵先生</p>
            </el-col>
            </el-row>
            <el-row align="left" style="text-align:left">
            <el-col :span="2">
                <p>邮&nbsp;箱:</p>
            </el-col>
            <el-col :span="22">
                <p>bingzhao456@163.com</p>
            </el-col>
            </el-row>
            <el-row align="left" style="text-align:left">
            <el-col :span="2">
                <p>微&nbsp;信:</p>
            </el-col>
            <el-col :span="22">
                <p>guangtoufangyang</p>
            </el-col>
            </el-row>
        </div>

        <div class="about_tile">
            <strong>·赞助</strong>
        </div>
        <div class="about_text">
            <div class="div_main_frame">
                <div style="text-align:left;margin-right:50px;float:left;">
                <img src="~@/assets/weixin.png" style="width:120px;"><br/>
                <span style="font:14px 宋体;">微信赞助（**冰）</span>
                </div>

                <div style="text-align:left;margin-right:50px;float:left;">

                <img src="~@/assets/zhifubao.png" style="width:120px;height:120px;"><br/>
                <span style="font:14px 宋体;">支付宝赞助（**冰）</span>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
    </div>
    
    <ViewFooter/>
</template>

<script>

import ViewFooter from '@/components/ViewFooter.vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"
export default 
{
    name: 'PageAbout',
    components: {
        ViewFooter
    }
}

</script>

<style>

.about_tile {
    text-align:left;
    padding-left:30px;
    line-height:50px;
    font-size: 24px;
    border-top:1px solid #009100;
    border-bottom:1px dashed #009100;
}

.about_text {
    padding:30px;
    line-height:30px;
}

</style>
