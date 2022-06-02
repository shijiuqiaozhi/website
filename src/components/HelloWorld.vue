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
            <div class="header-top">
              <div class="imgs">
                <el-image 
                  :src="require('@/assets/logo.png')"
                />
                <el-image
                  style="margin-bottom: 15px;"
                  :src="require('@/assets/文字logo.svg')"
                />
              </div>
              <div class="loginEnter">
                您好，请
                <a 
                  href="/loginForm"
                  class="login-a" 
                >
                  登录
                </a>
              </div>
            </div>
            <el-menu
              router
              :default-active="activeIndex"
              class="el-menu-demo menu"
              background-color="rgb(56,119,185)"
              text-color="white"
              mode="horizontal"
              :ellipsis="false"
              @select="handleSelect"
            >
              <el-menu-item
                class="hvr-icon-shrink" 
                index="1"
                :route="{
                  path: '/',
                  name: 'mainPage',
                  component: 'mainPage'
                }"
              >
                <el-icon>
                  <House class="hvr-icon" />
                </el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-menu-item
                class="hvr-icon-shrink" 
                index="2"
                :route="{
                  path: '/authorizeForm',
                  name: 'authroizeForm',
                  component: 'authorizeForm'
                }"
              >
                <el-icon>
                  <EditPen class="hvr-icon"/>
                </el-icon>
                在线填报委托
              </el-menu-item>
              <el-menu-item 
                class="hvr-icon-shrink"
                index="3"
                :route="{
                  path: '/authorizeTable',
                  name: 'authorizeTable',
                  component: 'authorizeTable'
                }"
              >
                <el-icon>
                  <Files class="hvr-icon"/>
                </el-icon>
                进度和报告查询
              </el-menu-item>
              <el-menu-item 
                class="hvr-icon-shrink"
                index="4"
              >
                <el-icon>
                  <ChatDotRound class="hvr-icon"/>
                </el-icon>
                在线投诉
              </el-menu-item>
              <el-menu-item
                class="hvr-icon-shrink" 
                index="5"
              >
                <el-icon>
                  <Connection class="hvr-icon"/>
                </el-icon>
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
            <router-view />
          </el-main>
        </el-container>
    </el-container>
  </div>
  <footer-section />
</template>


<script>
import footerSection from '@/components/footer.vue'
export default {
  name: 'HelloWorld',
  components: {
    footerSection,
  },  
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: 1,
    }
  },
  methods() {

  },
  mounted() {
    console.log(this.$router);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("@/css/hover.css");
.container {
  background: rgb(244,245,247);
}

.el-container {
  justify-content: center;
}

.footer-contents {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
}

.header-top {
  display: flex; 
  justify-content: space-between;
  width: 100%;
}

.login-a {
  text-decoration:none;
  color: black;
}

.login-a:hover {
  color:  #79bbff;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  padding: 0;
  margin-bottom: 30px;

  .imgs {
    float: left;
    margin-bottom: 30px;
  }

  .menu {
    min-width: 1200px;
    max-width: 1200px;
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
  }
  
  .footer {
    color: white;
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgb(36,105,179);

    .top-line {
      border-bottom: 1px solid rgb(245,245,245);
      height: 65px;
      display: block;
      width: 100%;

      .footer-title {
        padding-top: 30px;
        float: left;

        span {
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }

    .off-line {
      height: auto;
      border-bottom: 1px solid rgb(245,245,245);

      .off-line-title {
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 30px;
        font-weight: 600;
        padding-bottom: 30px;
      }

      .off-line-content {
        font-family: PingFangSC-Semibold;
        padding-bottom: 30px;
      }
    }
    
    .copy-rights {
      height: auto;

      .copy-contents {
        padding: 10px 0;
        line-height: 30px;

        .line {
          width: 1px;
          height: 14px;
          background: #c2c3c3;
          display: inline-block;
          margin: 0 8px 0 8px;
        }
      }
    }
  }
</style>
