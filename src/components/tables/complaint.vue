<template>
  <div class="background">
    <span class="formTitle"> 在线投诉 </span>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item
        label="投诉类型"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择投诉类型"
        >
          <el-option
            label="其他"
            value="shanghai"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="委托单编号"
        prop="id"
      >
        <el-input
          v-model="ruleForm.id"
          placeholder="请选择委托单编号"
          disabled
        />
        <el-button @click="dialogTableVisible = true">选择委托单号</el-button>
      </el-form-item>
      <el-form-item
        label="姓名"
        prop="name"
      >
        <el-input placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item
        label="电话"
        prop="phone"
      >
        <el-input placeholder="请输入电话" />
      </el-form-item>
      <el-form-item
        label="主题"
        prop="theme"
      >
        <el-input placeholder="请输入主题" />
      </el-form-item>
      <el-form-item
        label="内容"
        prop="desc"
      >
        <el-input
          v-model="ruleForm.desc"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="hvr-round-corners"
          @click="submitForm(ruleFormRef)"
        >
          保存
        </el-button>
        <el-button
          class="hvr-round-corners"
          @click="resetForm()"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-dialog
      v-model="dialogTableVisible"
      title="委托单"
    >
      <el-table
        :data="gridData"
        border
      >
        <el-table-column
          property="entrust"
          label="委托单号"
          width="150"
        />
        <el-table-column
          property="applyDate"
          label="申请日期"
          width="200"
        />
        <el-table-column
          property="remark"
          label="备注"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="120"
        >
          <template #default="{ row }">
            <el-button
              link
              type="primary"
              size="small"
              @click="handleClick(row)"
            >
              选择
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'complaintForm',
  data() {
    return {
      ruleForm: {
        id: '', // 委托单编号
        name: '', // 姓名
        phone: '', // 电话
        theme: '', // 主题
        desc: '', //内容
        unitName: '', // 单位名称
        userName: '', //委托单位联系人
        region: [],
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: '',
      },
      dialogTableVisible: false,
      gridData: [
        {
          entrust: 'JA2111010002',
          applyDate: '2021-04-21',
          remark: '测试用备注',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      let storedArr = JSON.parse(sessionStorage.getItem('tableData')) || [];
      console.log('sta', storedArr);
      storedArr.push(this.ruleForm);
      sessionStorage['tableData'] = [JSON.stringify(storedArr)];
      this.$message({
        message: '保存成功',
        type: 'success',
      });
    },
    clickEnsure(row) {
      console.log('row', row);
    },
    handleClick(row) {
      this.ruleForm.id = row.entrust;
      this.dialogTableVisible = false;
      this.$message({
        message: '选择成功',
        type: 'success',
      });
    },
    resetForm() {
      this.$refs.ruleFormRef.resetFields();
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.el-input {
  width: 276px;
}

.el-select {
  width: 276px;
}

.el-textarea {
  width: 80%;
}

.background {
  position: relative;
  text-align: center;
}

.background::before {
  border-radius: 20px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  background-color: white;
}

.formTitle {
  display: flex;
  font-size: 18px;
  font-weight: 800;
  margin-left: 30px;
  margin-bottom: 18px;
  margin-top: 18px;
  color: #1b5393;
  width: 176px;
  border-bottom: 5px solid #409eff;
}

.el-table {
  --el-table-border-color: #a0cfff;
}
</style>
