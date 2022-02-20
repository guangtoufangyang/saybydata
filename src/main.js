import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import ElementPlus from 'element-plus'
import {ElForm,ElFormItem,ElInput,ElDatePicker,ElCol,ElSelect,ElOption,ElButton,ElBreadcrumb,ElBreadcrumbItem,ElRow,ElTable,ElTableColumn,ElTabPane,ElTabs} from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import cookie from 'vue-cookie'

//Vue.prototype.$cookie = cookie;
axios.defaults.baseURL = "/api"
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.withCredentials=true
//const app = createApp(App).use(ElementPlus, {size:'small', zIndex: -1}).use(router)
const app = createApp(App)

app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)
app.use(ElDatePicker)
app.use(ElCol)
app.use(ElSelect)
app.use(ElOption)
app.use(ElButton)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElRow)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElTabPane)
app.use(ElTabs)

app.use(router)
//app.config.globalProperties.host="http://localhost:8082"
app.config.globalProperties.host="http://xinxi.100pian.com"

const cors = require('koa2-cors')
app.use(cors({credentials:true}))
app.use(VueAxios, axios)
app.mount('#app')
