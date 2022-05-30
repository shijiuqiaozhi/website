<template>
  <div class="common-layout container">
    <el-container>
        <el-container
          style="padding-top: 40px; 
          min-width: 1200px; 
          max-width: 1200px;
          "
        >
          <el-header class="header">
            <div class="imgs">
              <el-image 
                :src="require('@/assets/logo.png')"
              />
              <el-image
                style="margin-bottom: 15px;"
                :src="require('@/assets/文字logo.svg')"
              />
            </div>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo menu"
              background-color="rgb(56,119,185)"
              text-color="white"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <el-icon>
                  <House />
                </el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                在线填报委托
              </el-menu-item>
              <el-menu-item index="3">
                进度和报告查询
              </el-menu-item>
              <el-menu-item index="4">
                在线投诉
              </el-menu-item>
              <el-menu-item index="5">
                查询投诉
              </el-menu-item>
            </el-menu>
            <div class="notice">
              <el-image
                class="notice-image"
                :src="require('@/assets/notice.svg')" />
              <p class="notice-content">
                苏州市质检院“你送我检”活动工作方案：根据省局《关于开展2021年度第二次“你送我检”活动的通知》（浙质监发〔2014〕101号）要求我院于“六 • 一”儿童…
              </p>
            </div>
          </el-header>
          <el-main class="main">
            <span class="title">产力链产业</span>
            <el-row gutter="20">
              <el-col
                v-for="(item) in listArr"
                :key="item"
                :span="6"
              >
                <el-card 
                  :body-style="{ padding: '0px' }"
                  shadow="hover"
                >
                  <el-image
                    :src="require('../assets/'+item.src)"
                    class="image"
                  />
                  <div style="padding: 14px">
                    <span>{{ item.name }}</span>
                    <div class="bottom">
                      <el-button 
                        text 
                        class="button"
                      >
                        Operating
                      </el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      listArr: [
        {
          src: 'card1.png',
          name: '光电显示板产业',
        }, 
        {
          src: 'card2.png',
          name: '纺织产业',
        },
        {
          src: 'card1.png',
          name: '智能制造产业',
        },
        {
          src: 'card2.png',
          name: '新能源充电桩产业',
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  background: rgb(244,245,247);
}

.el-container {
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  padding: 0;
  margin-bottom: 90px;

  .imgs {
    float: left;
    margin-bottom: 30px;
  }

  .menu {
    width: 1200px;
  }

  .notice {
    width: 1198px;
    height: 40px;
    opacity: 0.88;
    background: #FFFFFF;
    border: 1px solid rgba(226,226,226,1);
    border-radius: 0px 0px 4px 4px;

    .notice-image {
      float: left;
      margin-left: 10px;
      margin-top: 7px;
    }

    .notice-content {
      margin-top: 7px;
      color: #FA604C;
    }
  }
}
  .main {
    display: flex;
    flex-direction: column;

    .title {
      width: 256px;
      height: 45px;
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #1B5393;
      letter-spacing: 0;
      font-weight: 600;
      margin-bottom: 30px;
      margin-left: -40px;
    }
  }
  
</style>
