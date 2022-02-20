<template>
    <div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
        
    <div class="fastweb_div_middle" style="width:1500px;min-height:200px;text-align:center;">
        <div class="div_page_top_middle" style="width:auto;height:auto;margin:0;padding:0">
            <svg class="data_svg" width="800" height="480" style="float:left;"></svg>
            <div class="div_main_frame" style="float:left;text-align:left;width:700px;height:480px;background:Khaki">
                <div class="about_tile">
            <strong>什么是投资</strong>
            </div>
            <div class="about_text">
                <el-row align="left" style="text-align:left">
                <el-col :span="24">
                    <br/>
                    <p>&nbsp;&nbsp;每个人对投资的定义不同，《聪明的投资者》将投资定义为：以深入分析为基础，确保本金的安全，并获得适当的回报。</p>
                    <br/>
                    <p>&nbsp;&nbsp;投资应当是一个理性的过程，但人通常是非理性的。分析，不应该仅关于信息，我们还需要学会分析自己的行为习惯：投资 = 充分的信息 + 合理的操作。</p>
                    <br/>
                    <p>&nbsp;&nbsp;而关于本站，是希望提供尽量多的信息，以便用户在做出投资选择前能够更全面的了解信息。</p>
                </el-col>
                </el-row>
            </div>
            </div>
            <div style="clear:both"></div>
        </div>

        <div class="div_page_top_middle" style="width:auto;height:auto;margin:0;padding:0;background:#faa755;text-align:center">
            <div class="div_main_frame" style="width:700px;height:auto;text-align:center;margin-left:400px">
            <div class="about_tile" style="text-align:center;">
            <strong>服务说明</strong>
            </div>
            <div class="about_text">
                <el-row align="left" style="text-align:center">
                <el-col :span="24">
                    <p>&nbsp;&nbsp;1.本站主要向用户提供全面可分析的股市关联数据；</p>
                    <br/>
                    <p>&nbsp;&nbsp;2.本站的数据全部来自于网络；</p>
                </el-col>
                </el-row>
            </div>
            </div>

            <div class="div_main_frame" style="width:700px;height:auto;text-align:center;margin-left:400px">
            <div class="about_tile" style="text-align:center;">
            <strong>服务宗旨</strong>
            </div>
            <div class="about_text">
                <el-row align="left" style="text-align:center">
                <el-col :span="24">
                    <p>&nbsp;&nbsp;1. 时间就是金钱，效率就是生命。帮用户节省大量找信息的时间，是建站的源动力。用数据说话；少说废话。</p>
                    <br/>
                    <p>&nbsp;&nbsp;2. 授之以鱼不如授之以渔。作为一个独立的交易者，需要掌握分析信息的能力。</p>
                    <br/>
                    <p>&nbsp;&nbsp;3. 用数据说话，少说废话。</p>
                    <br/>
                </el-col>
                </el-row>
            </div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
    </div>
    
    <ViewFooter/>
</template>

<script>

import ViewFooter from '@/components/ViewFooter.vue'
import * as d3 from 'd3'
import "@/assets/global.css"
import "@/assets/fastweb.css"

export default 
{
    name: 'PageIndex',
    components: {
        ViewFooter
    },
    methods: {
        doPentagon(r) {
            var points = this.polygonPoints(400,240,r,[5]);
            d3.select(".data_svg")
                .append("polygon")
                .attr("points", points)
                .style("fill", "none")
                .style("stroke", "purple")
                .style("stroke-dasharray", "5,2")
                .style("stroke-width", 1);
        },

        doActual() {
            var points = this.polygonActual(400,240,200,[5]);
            d3.select(".data_svg")
                .append("polygon")
                .attr("points", points)
                .style("fill", "gray")
                .style('opacity', .75) 
                .style("stroke", "purple")
                .style("stroke-width", 1);
        },
        doText(cx, cy, r, n) {
            var alpha = 2 * Math.PI / n;
            var a = Math.PI / 2 + alpha / 2;
            var text_arr = ["全面","持续","实时","精准","可分析"];
            var x_offset = [-12,-24,-12,0,-18];
            var y_offset = [12,0,-2,0,12];
            for(var i = 0;i < n; ++i) {
                var x = cx + r * Math.cos(a) + x_offset[i];
                var y = cy + r * Math.sin(a) + y_offset[i];
                d3.select(".data_svg").append("text").text(text_arr[i]).attr("x", x).attr("y", y).attr("font-family", "sans-serif").attr("font-size", "12px");
                a += alpha;
            }
            d3.select(".data_svg").append("text").text("本站数据").attr("x", 370).attr("y", 450).attr("font-family", "sans-serif").attr("font-size", "12px");
        },

        doLine(cx, cy, r, n) {
            var alpha = 2 * Math.PI / n;
            var a = Math.PI / 2 + alpha / 2;
            for(var i = 0;i < n; ++i) {
                var x = cx + r * Math.cos(a);
                var y = cy + r * Math.sin(a);
                d3.select(".data_svg").append("line").attr("x1", cx).attr("y1", cy).attr("x2", x).attr("y2", y).attr("stroke", "purple").attr("stroke-width", 1);
                a += alpha;
            }
        },

        polygonPoints(cx, cy, r, n){
            var alpha = 2 * Math.PI / n;
            var a = Math.PI / 2 + alpha / 2;
            var points = "";
            for(var i = 0;i < n; ++i) {
                var x = cx + r * Math.cos(a);
                var y = cy + r * Math.sin(a);
                points += x + "," + y + ",";
                a += alpha;
            }
            return points.substring(0, points.length - 1);
        },
        polygonActual(cx, cy, r, n){
            var alpha = 2 * Math.PI / n;
            var a = Math.PI / 2 + alpha / 2;
            var points = "";
            var ratio=[0.75, 0.8, 0.5, 0.55, 0.7]
            for(var i = 0;i < n; ++i) {
                var x = cx + r * Math.cos(a) * ratio[i];
                var y = cy + r * Math.sin(a) * ratio[i];
                points += x + "," + y + ",";
                a += alpha;
            }
            return points.substring(0, points.length - 1);
        }

    },
    mounted() {
        //const svg = d3.select(this.$refs.my_svg).attr("width", 800).attr("height", 800);
        d3.select(".data_svg").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "Khaki"); 
        this.doPentagon(200);
        this.doPentagon(160);
        this.doPentagon(120);
        this.doPentagon(80);
        this.doPentagon(40);
        this.doLine(400,240,200,5);
        this.doActual();
        this.doText(400,240,200,5);
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
