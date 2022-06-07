<template>
  <div style="background: rgb(244, 245, 247)">
    <el-footer class="footer">
      <div class="footer-contents">
        <div class="top-line">
          <div class="footer-title">
            <span class="hvr-back-pulse">
              技术支持:浙江九安检测科技有限公司
            </span>
          </div>
        </div>
        <div class="off-line">
          <el-row :gutter="20">
            <el-col
              v-for="(item, index) in footerList"
              :key="index"
              :span="8"
            >
              <div class="off-line-title hvr-bounce-out">
                {{ item.title }}
              </div>
              <div
                v-for="(litem, lindex) in item.contents"
                :key="lindex"
                class="off-line-content"
              >
                <span
                  class="hvr-underline-from-left content-words"
                  style="cursor: pointer"
                >
                  {{ litem }}
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="copy-rights">
          <div class="copy-contents">
            © Copyrights 2021 浙江九安检测科技有限公司. All rights reserved
            <div class="line" />
            浙公网安备 XXXXXXXXXXXXXX号
          </div>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'footerSection',
  data() {
    return {
      footerList: [
        {
          title: '检测能力',
          contents: ['执行标准', '检测方案', '检测项目'],
        },
        {
          title: '检测动态',
          contents: [
            '第四分院多措施并举加强党建工作',
            '我院参加"读党史，守初心，担使命"演讲比赛',
            '院各党支部开展8月主题党日活动',
            '院党委理论学习中心组开展2020年度第七次集体学习',
          ],
        },
        {
          title: '关于我们',
          contents: ['公司简介', '可持续发展', '奖项荣誉', '新闻动态'],
        },
      ],
    };
  },
};
</script>

<style
  lang="scss"
  scoped
>
.footer-contents {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
}

.footer {
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(36, 105, 179);

  .top-line {
    border-bottom: 1px solid rgb(245, 245, 245);
    height: 65px;
    display: block;
    width: 100%;

    .footer-title {
      padding-top: 30px;
      float: left;

      span {
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 30px;
        font-weight: 600;
      }
    }
  }

  .off-line {
    height: auto;
    border-bottom: 1px solid rgb(245, 245, 245);

    .off-line-title {
      font-family: PingFangSC-Semibold;
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 30px;
      font-weight: 600;
      padding-bottom: 30px;
    }

    .off-line-content {
      font-family: PingFangSC-Semibold;
      padding-bottom: 30px;

      .content-words:hover {
        color: #ecf5ff;
      }
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
