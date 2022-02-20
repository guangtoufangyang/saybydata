<template>
<div class="div_main_frame" style="text-align:center;margin:0 auto" align="center">
<div class="fastweb_div_middle" style="width:800px;text-align:center;">
    <h1>登录</h1>
    <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"

export default {
    name: 'PageLogin',
    data() {
        return {

        };
    },
    setup(){
       const form = reactive({
            name: '',
            pwd: '',
            });
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      return {form, host};
        
    },
    methods: {
        onSubmit() {
          var api_url = this.host.concat("/api/login?name=").concat(this.form.name).concat("&pwd=").concat(this.form.pwd);
          this.axios.get(api_url)
          .then(response => {
            if((response.status == 200) && (response.data.result == 0)){
              console.log("login")
              //var res = response.data.data.split("|")
              //if (res.length == 2) {
              //  this.$cookie.set('login', res[0], 1);
              //  this.$cookie.set('name', res[1], 1);
              //}
              //document.cookie = "login=" + res[0] + "; name=" + res[1]
              //document.cookie += "; name=" + res[1]
            }
          })
          .catch(error => alert(error));
        }
    }
};

// do not use same name with ref



</script>