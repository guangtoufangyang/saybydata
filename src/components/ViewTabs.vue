<template>
    <div class="div_main_frame">
        
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            
            <el-tab-pane label="监管" name="tab1" :key="'tab1'">
                <ViewAttrV3 v-if="isChildUpdate1" :json_data="json_data" />    
            </el-tab-pane>

            <el-tab-pane label="诉讼" name="tab2" :key="'tab2'">
                <ViewAttrV3 v-if="isChildUpdate2" :json_data="json_data" />   
            </el-tab-pane>

            <el-tab-pane label="调价" name="tab3" :key="'tab3'">
                <ViewAttrV3 v-if="isChildUpdate3" :json_data="json_data" /> 
            </el-tab-pane>

            <el-tab-pane label="调研" name="tab4" :key="'tab4'">
                <ViewAttrV3 v-if="isChildUpdate4" :json_data="json_data" /> 
            </el-tab-pane>

            <el-tab-pane label="产业链" name="tab5" :key="'tab5'">
                <ViewAttrV3 v-if="isChildUpdate5" :json_data="json_data" /> 
            </el-tab-pane>

            <el-tab-pane label="管理" name="tab6" :key="'tab6'">
                <ViewAttrV3 v-if="isChildUpdate6" :json_data="json_data" /> 
            </el-tab-pane>

            <el-tab-pane label="业绩" name="tab7" :key="'tab7'">
                <ViewAttrV3 v-if="isChildUpdate7" :json_data="json_data" /> 
            </el-tab-pane>

            <el-tab-pane label="其它" name="tab99" :key="'tab99'">
                <ViewAttrV3 v-if="isChildUpdate99" :json_data="json_data" /> 
            </el-tab-pane>

        </el-tabs>
        
    </div>
</template>

<script>
import ViewAttrV3 from '@/components/ViewAttrV3'
import { getCurrentInstance } from 'vue'

export default {
    name: 'ViewTabs',
    components:{
        ViewAttrV3
    },
    data() {
        return {
            //默认第一个选项卡
            activeName: "tab1",
            isChildUpdate1:true,
            isChildUpdate2:false,
            isChildUpdate3:false,
            isChildUpdate4:false,
            isChildUpdate5:false,
            isChildUpdate6:false,
            isChildUpdate7:false,
            isChildUpdate99:false,
            json_data: {},
        }
    },
    setup(){
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      return {host};  
    },
    mounted(){
        var type = this.$route.query.type
        var code = this.$route.query.code
        var api_url = this.host.concat("/api/display_chufa?type=").concat(type).concat("&code=").concat(code);
        this.isChildUpdate1 = true;
        this.isChildUpdate2 = false;
        this.isChildUpdate3 = false;
        this.isChildUpdate4 = false;
        this.isChildUpdate5 = false;
        this.isChildUpdate6 = false;
        this.isChildUpdate7 = false;
        this.isChildUpdate99 = false;
        this.axios.get(api_url)
        .then(response => {
            if((response.status == 200) && (response.data.result == 0)){
                this.json_data = JSON.parse(response.data.data);
            }
        })
        .catch(error => alert(error));
    },
    methods:{
        handleClick(tab, event) {
            var type = this.$route.query.type
            var code = this.$route.query.code
            var api_url = ''
            if(tab.props.name == "tab1") {
                api_url = this.host.concat("/api/display_chufa?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = true;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab2") {
                api_url = this.host.concat("/api/display_susong?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = true;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab3") {
                api_url = this.host.concat("/api/display_tiaojia?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = true;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab4") {
                api_url = this.host.concat("/api/display_diaoyan?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = true;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab5") {
                api_url = this.host.concat("/api/display_chanyelian?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = true;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab6") {
                api_url = this.host.concat("/api/display_guanli?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = true;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab7") {
                api_url = this.host.concat("/api/display_yeji?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = true;
                this.isChildUpdate99 = false;
            } else if(tab.props.name == "tab99") {
                api_url = this.host.concat("/api/display_other?type=").concat(type).concat("&code=").concat(code);
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = false;
                this.isChildUpdate3 = false;
                this.isChildUpdate4 = false;
                this.isChildUpdate5 = false;
                this.isChildUpdate6 = false;
                this.isChildUpdate7 = false;
                this.isChildUpdate99 = true;
            }
            this.axios.get(api_url)
            .then(response => {
                if((response.status == 200) && (response.data.result == 0)){
                    this.json_data = JSON.parse(response.data.data);
                }
            })
            .catch(error => alert(error));
        }
    }
}
</script>