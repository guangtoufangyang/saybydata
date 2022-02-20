<template>
<div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
<div class="fastweb_div_middle" style="width:800px;text-align:center;">
    <h1>宏观数据</h1>
    <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="类型" style="text-align:left">
      <el-select v-model="form.etype" placeholder="选择类型">
        <el-option label="中国政策" value="100"></el-option>
        <el-option label="美国政策" value="200"></el-option>
        <el-option label="国际关系" value="300"></el-option>
        <el-option label="体育盛事" value="900"></el-option>
        <el-option label="统计数据" value="901"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发布日期">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="网址">
      <el-input v-model="form.url"></el-input>
    </el-form-item>

    <el-form-item label="网站">
      <el-input v-model="form.site"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>

  <h1>宏观持续性事件</h1>
    <el-form ref="formMacroContinuousRef" :model="macro_continuous_form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="macro_continuous_form.title"></el-input>
    </el-form-item>
    <el-form-item label="类型" style="text-align:left">
      <el-select v-model="macro_continuous_form.etype" placeholder="选择类型">
        <el-option label="中国政策" value="100"></el-option>
        <el-option label="美国政策" value="200"></el-option>
        <el-option label="体育盛事" value="900"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开始日期">
      <el-col :span="11">
        <el-date-picker
          v-model="macro_continuous_form.start_date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="结束日期">
      <el-col :span="11">
        <el-date-picker
          v-model="macro_continuous_form.end_date"
          type="date"
          placeholder="Pick a date"
          value-format="YYYY-MM-DD"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="网址">
      <el-input v-model="macro_continuous_form.url"></el-input>
    </el-form-item>



    <el-form-item>
      <el-button type="primary" @click="macroContinuousSubmit">提交</el-button>
    </el-form-item>
  </el-form>


  <h1>属性数据</h1>
    <el-form ref="formAttrRef" :model="attr_data_form" label-width="120px">
    <el-form-item label="代码">
      <el-input v-model="attr_data_form.code"></el-input>
    </el-form-item>
    <el-form-item label="代码类型" style="text-align:left">
      <el-select v-model="attr_data_form.code_type" placeholder="选择类型">
        <el-option label="股票" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="属性类型" style="text-align:left">
      <el-select v-model="attr_data_form.attr_type" placeholder="选择类型">
        <el-option label="调价" value="3001"></el-option>
        <el-option label="处罚" value="3002"></el-option>
        <el-option label="诉讼" value="3003"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="标题">
      <el-input v-model="attr_data_form.title"></el-input>
    </el-form-item>
    <el-form-item label="开始日期">
      <el-col :span="11">
        <el-date-picker
          v-model="attr_data_form.date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="网址">
      <el-input v-model="attr_data_form.url"></el-input>
    </el-form-item>
    <el-form-item label="站点">
      <el-input v-model="attr_data_form.site"></el-input>
    </el-form-item>



    <el-form-item>
      <el-button type="primary" @click="attrDataSubmit">提交</el-button>
    </el-form-item>
  </el-form>


  <h1>市场数据</h1>
  <el-form ref="formMarketRef" :model="market_form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="market_form.title"></el-input>
    </el-form-item>
    <el-form-item label="类型" style="text-align:left">
      <el-select v-model="market_form.etype" placeholder="选择类型">
        <el-option label="大宗商品" value="2100"></el-option>
        <el-option label="自然灾害" value="2150"></el-option>
        <el-option label="指数" value="2200"></el-option>
        <el-option label="企业动态" value="2300"></el-option>
        <el-option label="节假日" value="2400"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发布日期">
      <el-col :span="11">
        <el-date-picker
          v-model="market_form.date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="网址">
      <el-input v-model="market_form.url"></el-input>
    </el-form-item>

    <el-form-item label="网站">
      <el-input v-model="market_form.site"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="marketSubmit">提交</el-button>
    </el-form-item>
  </el-form>

  <h1>市场持续性事件</h1>
    <el-form ref="formMarketContinuousRef" :model="market_continuous_form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="market_continuous_form.title"></el-input>
    </el-form-item>
    <el-form-item label="开始日期">
      <el-col :span="11">
        <el-date-picker
          v-model="market_continuous_form.start_date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="结束日期">
      <el-col :span="11">
        <el-date-picker
          v-model="market_continuous_form.end_date"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="网址">
      <el-input v-model="market_continuous_form.url"></el-input>
    </el-form-item>



    <el-form-item>
      <el-button type="primary" @click="marketContinuousSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</div>
<ViewFooter/>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"

export default {
    name: 'PageAdd',
    data() {
        return {

        };
    },
    setup(){
       const form = reactive({
            title: '',
            etype: '',
            date: '',
            url: '',
            site: '',
            });
        const macro_continuous_form = reactive({
            title: '',
            start_date: '',
            end_date: '',
            url: '',
            });
        const market_form = reactive({
            title: '',
            etype: '',
            date: '',
            url: '',
            site: '',
            });
        const market_continuous_form = reactive({
            title: '',
            start_date: '',
            end_date: '',
            url: '',
            });
        const attr_data_form = reactive({
            code: '',
            code_type: '',
            attr_type: 0,
            title: '',
            date:'',
            url:'',
            site:'',
            });
        const host = getCurrentInstance()?.appContext.config.globalProperties.host
        return {form,macro_continuous_form,market_form,market_continuous_form,attr_data_form,host};
        
    },
    methods: {
        onSubmit() {
            console.log('submit5!' + this.form.title)
            var api_url = this.host.concat("/api/overall_add?title=").concat(this.form.title)
                          .concat("&date=").concat(this.form.date).concat("&type=").concat(this.form.etype)
                          .concat("&url=").concat(this.form.url).concat("&site=").concat(this.form.site)
            this.axios.get(api_url)
            .then(response => {
                if((response.status != 200) || (response.data.result != 0)){
                this.$message({
                    message: "添加失败",
                    type: "fail"
                });
                return;
                }
            })
            .catch(error => alert("添加失败"));
        },
        macroContinuousSubmit() {
            console.log('submit2!' + this.macro_continuous_form.start_date)
            var api_url = this.host.concat("/api/continuous_overall_add?title=").concat(this.macro_continuous_form.title).concat("&type=").concat(this.macro_continuous_form.etype).concat("&start_date=").concat(this.macro_continuous_form.start_date).concat("&end_date=").concat(this.macro_continuous_form.end_date).concat("&url=").concat(this.macro_continuous_form.url)
            this.axios.get(api_url)
            .then(response => {
                if((response.status != 200) || (response.data.result != 0)){
                this.$message({
                    message: "添加失败",
                    type: "fail"
                });
                return;
                }
            })
            .catch(error => alert("添加失败"));
        },
        attrDataSubmit() {
            console.log('submit2!' + this.attr_data_form)
            var api_url = this.host.concat("/api/attr_data_add?title=").concat(this.attr_data_form.title).concat("&url=").concat(this.attr_data_form.url)
                          .concat("&code=").concat(this.attr_data_form.code).concat("&code_type=").concat(this.attr_data_form.code_type)
                          .concat("&attr_type=").concat(this.attr_data_form.attr_type).concat("&date=").concat(this.attr_data_form.date)
                          .concat("&site=").concat(this.attr_data_form.site)
            this.axios.get(api_url)
            .then(response => {
                if((response.status != 200) || (response.data.result != 0)){
                this.$message({
                    message: "添加失败",
                    type: "fail"
                });
                return;
                }
            })
            .catch(error => alert("添加失败"));
        },
        marketSubmit() {
            console.log('submit3!' + this.market_form.title)
            var api_url = this.host.concat("/api/market_data_add?title=").concat(this.market_form.title)
                          .concat("&date=").concat(this.market_form.date).concat("&type=").concat(this.market_form.etype)
                          .concat("&url=").concat(this.market_form.url).concat("&site=").concat(this.market_form.site)
            this.axios.get(api_url)
            .then(response => {
                if((response.status != 200) || (response.data.result != 0)){
                this.$message({
                    message: "添加失败",
                    type: "fail"
                });
                return;
                }
            })
            .catch(error => alert("添加失败"));
        },
        marketContinuousSubmit() {
            console.log('submit4!' + this.market_continuous_form.title)
            var api_url = this.host.concat("/api/market_continuous_add?title=").concat(this.market_continuous_form.title)
                          .concat("&start_date=").concat(this.market_continuous_form.start_date)
                          .concat("&end_date=").concat(this.market_continuous_form.end_date)
                          .concat("&url=").concat(this.market_continuous_form.url)
            this.axios.get(api_url)
            .then(response => {
                if((response.status != 200) || (response.data.result != 0)){
                this.$message({
                    message: "添加失败",
                    type: "fail"
                });
                return;
                }
            })
            .catch(error => alert("添加失败"));
        },
    }
};

// do not use same name with ref



</script>