<template>
  <div>
    <Login/>
    <h1>宏观数据审核</h1>
    <!--el-button size="mini" @click="handleAdd()" type="primary">Add</el-button-->
    <el-table
      ref="mytable"
      :data="table_data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="radio" type="index" width="50"></el-table-column>
      <!--el-table-column v-if="selection" type="selection" width="55"></el-table-column-->
      <el-table-column
        align="center"
        v-for="(item,index,key) in table_columns"
        :item="item"
        :key="key"
        :index="index"
        :label="item.label"
      >
        <template v-slot="scope">
          <el-input
            v-if="scope.row.edit"
            size="small"
            v-model="scope.row[item.prop]"
            :placeholder="'请输入'+item.label"
          ></el-input>
          <a :href="scope.row[item.prop]" target="_blank" class="buttonText" v-if="!scope.row.edit && item.prop=='name'">{{scope.row[item.prop]}}</a>
          <span v-if="!scope.row.edit && item.prop!='name'">{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <!-- 全局控制的编辑 -->
          <div v-if="is_edit&&scope.row.add==undefined" style="display: inline-block;">
            <!-- 编辑 -->
            <el-button
              size="mini"
              v-if="!scope.row.edit"
              @click="handleEdit(scope.$index, scope.row)"
              type="primary"
            >Edit</el-button>
            <!-- 保存 -->
            <el-button
              size="mini"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row)"
            >Save</el-button>
          </div>
          <!-- 添加控制 -->
          <div v-if="scope.row.add!=undefined&&scope.row.add" style="display: inline-block;">
            <!-- 保存 -->
            <el-button
              size="mini"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row)"
            >Save</el-button>
          </div>

          <!-- 通过 -->
          <el-button
            size="mini"
            type="danger"
            :plain="true"
            @click="handleOk(scope.$index, scope.row)"
          >Ok</el-button>
          <!-- 全局控制删除 -->
          <el-button
            size="mini"
            v-if="is_delete&&scope.row.add==undefined"
            :plain="true"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import ViewFooter from '@/components/ViewFooter.vue'
import PageLogin from '@/components/PageLogin.vue'
import { getCurrentInstance } from 'vue'
import "@/assets/global.css"
import "@/assets/fastweb.css"

export default 
{
    name: 'PageExamineOverall',
    components: {
        ViewFooter,
        PageLogin
    },methods: {
    //隔行变色
    tableRowClassName() {
      //选取DOM节点
      var trs = this.$refs.mytable.$el
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr");
      for (var i in trs) {
        if (i % 2 == 0) {
          //当隔行变色未true时改变颜色
          if (this.space_color) {
            trs[i].style.backgroundColor = "#f0f9eb";
          } else {
            trs[i].style.backgroundColor = "";
          }
        }
      }
    },
    data() {
      return {
        host:"",
      };
    },
    setup(){
      //const host = process.env.host
      const host = getCurrentInstance()?.appContext.config.globalProperties.host
      console.log("setup:", host);
      return {host}
    },
    //多选框
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("selection:", this.multipleSelection);
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
      row.edit = true;
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row.name);
      console.log(index, row);

      this.table_data.splice(index, 1);

      var api_url = this.host.concat("/api/overall_delete?id=").concat(row.id);
      this.axios.get(api_url)
      .then(response => {
        if((response.status != 200) || (response.data.result != 0)){
          this.$message({
            message: "审核失败",
            type: "fail"
          });
          return;
        }
      })
      .catch(error => alert(error));


      this.$message({
        message: "删除成功！",
        type: "success"
      });
    },
    //保存
    handleSave(index, row) {
      console.log(index, row);
      row.edit = false;

      delete this.table_data[index].add;

      var api_url = this.host.concat("/api/overall_update?id=").concat(row.id)
                    .concat("&date=").concat(row.date).concat("&type=").concat(row.etype)
                    .concat("&title=").concat(row.title).concat("&url=").concat(row.url)
                    .concat("&site=").concat(row.site);
      this.axios.get(api_url)
      .then(response => {
        if((response.status != 200) || (response.data.result != 0)){
          this.$message({
            message: "审核失败",
            type: "fail"
          });
          return;
        }
      })
      .catch(error => alert(error));

      this.$message({
        message: "保存成功！",
        type: "success"
      });
    },
    //通过
    handleOk(index, row) {
      console.log(index, row);
      row.edit = false;

      this.table_data.splice(index, 1);
      var api_url = this.host.concat("/api/overall_confirm?id=").concat(row.id);
      this.axios.get(api_url)
      .then(response => {
        if((response.status != 200) || (response.data.result != 0)){
          this.$message({
            message: "审核失败",
            type: "fail"
          });
          return;
        }
      })
      .catch(error => alert(error));

      this.$message({
        message: "审核通过",
        type: "success"
      });
    },
    handleAdd() {
      var addDataJson = {};
      console.log("handleAdd:", this.new_date_json);
      for (var key in this.new_date_json) {
        if (key === "edit") {
          delete addDataJson[key];
        } else if (key === "add") {
          delete addDataJson[key];
        } else {
          addDataJson[key] = "";
        }
      }
      addDataJson.edit = true;
      addDataJson.add = true;
      this.table_data.push(addDataJson);
    },
    //初始化编辑属性
    initEditAttribute() {
      var self = this;
      var edit = self.edit;
      
      var host = getCurrentInstance()?.appContext.config.globalProperties.host
      var api_url = host.concat("/api/overall_for_check");
      this.axios.get(api_url)
      .then(response => {
        if((response.status == 200) && (response.data.result == 0)){
          var dataArray_temp = JSON.parse(response.data.data);
          console.log("dataArray1:", dataArray_temp);

          if (dataArray_temp.length > 0) {
            //添加编辑事件
            for (var index in dataArray_temp) {
              dataArray_temp[index]["edit"] = false;
              this.table_data.push(dataArray_temp[index]);
            }

            if (Object.keys(this.new_date_json).length === 0) {
              //新增时，初始化数据结构
              this.initAddDataJson(dataArray_temp[0]);
            }
          }

        }
      })
      .catch(error => alert(error));
    },
    initAddDataJson(dataArray) {
      //新增时，初始化数据结构
      var dataJson = dataArray;
      var newDateJson = {};
      for (var key in dataJson) {
        if (key === "edit") {
          newDateJson[key] = "true";
        } else {
          newDateJson[key] = "";
        }
      }
      newDateJson["add"] = true;
      this.new_date_json = newDateJson;
    }
  },
  mounted: function() {
    this.initEditAttribute();
    //确保方法在页面渲染后调用
    this.$nextTick(function() {
      /////方法
      this.tableRowClassName();
    });
  },
  watch: {
    space_color: function() {
      //监听数据变化
      this.$nextTick(function() {
        /////方法
        this.tableRowClassName();
      });
    },
    table_data: function() {
      //监听数据变化f
      this.$nextTick(function() {
        /////方法
        this.tableRowClassName();
      });
    }
  },
  data() {
    return {
      new_date_json: {}, //数据结构
      multipleSelection: [], //复选框，数据
      is_edit: true, //是否可编辑
      is_delete: true, //是否可删除
      selection: true, //是否需要复选框
      radio: false, //单选变色
      space_color: true, //隔行变色
      //表头信息
      table_columns: [
        {
          prop: "id",
          label: "ID",
          width: "20"
        },
        {
          prop: "date",
          label: "生效日期",
          width: "150"
        },
        {
          prop: "etype",
          label: "事件类型",
          width: "150"
        },
        {
          prop: "title",
          label: "标题",
          width: "150"
        },
        {
          prop: "url",
          label: "网址",
          width: ""
        },
        {
          prop: "site",
          label: "网站名称",
          width: "150"
        }
      ],
      //表格数据
      table_data: [
      ]
    };
  }
}



</script>

<style>


</style>
