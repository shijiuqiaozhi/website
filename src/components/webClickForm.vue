<template>
<el-tooltip
  class="box-item"
  effect="dark"
  content="在线咨询"
  placement="top-start"
>
  <el-button 
    class="fixed-button hvr-glow" 
    circle
    @click="openFixForm"
  >
    <el-icon>
      <Edit />
    </el-icon>
  </el-button>
</el-tooltip>
<div
  v-show="openFix"
  class="fixed-form form-animation"
>
  <div class="title-space">
    <span class="fix-title">
      请您留言
      <el-icon 
        style="
          margin: 7px 5px 0 0;
          cursor: pointer;
        "
        @click="openFixForm"
      >
        <Close />
      </el-icon>
    </span>
  </div>
  <el-form
    :model="suggestForm"
    class="form-content"
    ref="suggestForm"
  >
    <el-form-item 
      label="企业名称" 
      prop="companyName"
    >
      <el-input 
        v-model="suggestForm.companyName"
        clearable
        style="width: 148px;"
        placeholder="请输入企业名称" 
      />
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input 
        v-model="suggestForm.name"
        clearable
        placeholder="请输入姓名" 
      />
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input 
        v-model="suggestForm.phone"
        clearable
        placeholder="请输入电话" 
      />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input 
        v-model="suggestForm.email"
        clearable
        placeholder="请输入邮箱" 
      />
    </el-form-item>
    <el-form-item label="地址" prop="adress">
      <el-input 
        v-model="suggestForm.adress"
        clearable
        placeholder="请输入地址" 
      />
    </el-form-item>
    <el-form-item label="内容" prop="desc">
      <el-input 
        v-model="suggestForm.desc" 
        type="textarea"
        placeholder="请在此输入内容，我们会尽快与您取得联系" 
      />
    </el-form-item>
    <el-form-item class="btns">
      <el-button 
        type="primary"
        class="hvr-round-corners" 
        @click="submitForm"
      >
        发送
      </el-button>
      <el-button 
        class="hvr-round-corners" 
        @click="resetForm()"
      >
        重置
      </el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      suggestForm: {
        companyName: '',
        name: '',
        phone: '',
        email: '',
        adress: '',
      },
      openFix: false,
    };
  },
  methods: {
    openFixForm() {
      this.openFix = !this.openFix;
    },

    submitForm() {
      this.$message({
        message: '发送成功',
        type: 'success'
      });
    },

    resetForm() {
      this.$refs.suggestForm.resetFields();
    }
  },
}
</script>

<style lang="scss" scoped>
.fixed-button {
    position: fixed;
    right: 25px;
    bottom: 72px;
    width: 40px;
    height: 40px;

    .el-icon {
      color: blue;
    }
  }

  .fixed-form {
    position: fixed;
    right: 25px;
    bottom: 115px;
    border-radius: 20px;
    background-color:  #d9ecff;
    width: 300px;
    z-index: 4;

    .title-space {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: #a0cfff;
      border-top-left-radius:20px;
      border-top-right-radius:20px;
      margin-bottom: 18px;

      .fix-title {
        color: white;
        display: flex;
        margin-left: 18px;
        justify-content: space-between;
      }
    }    

    .el-input {
      width: 176px;
    }
    
    :deep(.el-textarea__inner) {
      width: 176px;
    }

    :deep(.el-form-item__label) {
      margin-left: 18px;
    }

    .btns {
      margin-left: 18px;
    }
  }

  @keyframes fixForm {

    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .form-animation {
    animation: 0.5s linear fixForm;

  }
</style>