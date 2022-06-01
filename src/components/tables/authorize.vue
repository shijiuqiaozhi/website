<template>
<div class="background">
  <span class="formTitle">
    委托单填报
  </span>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="委托单号" prop="name">
      <el-input 
        v-model="ruleForm.name"
        clearable
        placeholder="请输入委托单号" 
      />
    </el-form-item>
    <el-form-item label="委托单位名称" prop="unitName">
      <el-input 
        v-model="ruleForm.unitName"
        clearable
        placeholder="请输入委托单位名称" 
      />
    </el-form-item>
    <el-form-item label="委托单位联系人" prop="userName">
      <el-input 
        v-model="ruleForm.userName"
        clearable
        placeholder="请输入委托单位联系人" 
      />
    </el-form-item>
    <el-form-item label="委托地点" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请输入委托地点">
        <el-option label="上海" value="shanghai" />
        <el-option label="北京" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="委托时间" required>
      <el-form-item prop="date1">
        <el-date-picker
          v-model="ruleForm.date1"
          type="date"
          label="Pick a date"
          placeholder="选择日期"
          style="width: 276px"
        />
      </el-form-item>
      <el-col class="text-center" :span="2">
        <span style="color:  #c6e2ff">-</span>
      </el-col>
      <el-col :span="7">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="选择时间"
            style="width: 276px"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="是否交付" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="委托类型" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="线上委托" name="type" />
        <el-checkbox label="户外委托" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="委托来源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="赞助" />
        <el-radio label="引流" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="委托内容" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >保存</el-button
      >
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'authorizeForm',
  data() {
    return {
      ruleForm: {
        name: '',
        unitName: '', // 单位名称
        userName: '', //委托单位联系人
        region: [],
        date1: '',
        date2: '',
        delivery: '',
        type: [],
        resource: '',
        desc: '',
      }
    };
  },
  methods: {
    submitForm() {

    },

    resetForm() {
      this.$refs.ruleFormRef.resetFields();
    },
  }
}
</script>

<style  lang="scss" scoped>
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
  background-image: url('@/assets/表单背景.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;
}

.formTitle {
  display: flex;
  font-size: 18px;
  font-weight: 800;
  margin-left: 30px;
  margin-bottom: 18px;
  color: #1B5393;
  width: 176px;
  border-bottom: 5px solid #409eff;
}
</style>