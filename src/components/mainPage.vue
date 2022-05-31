<template>
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
          class="hvr-underline-reveal"
        >
          <el-image
            :src="require('../assets/'+item.src)"
            class="image hvr-grow"
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
    <span class="title" style="width: 372px;">
      产业园区质量赋能站
    </span>
    <el-row gutter="20">
      <el-col
        v-for="(item) in sListArr"
        :key="item"
        :span="6"
      >
        <el-card 
          :body-style="{ padding: '0px' }"
          shadow="hover"
          style="height: 350px;"
          class="hvr-underline-reveal"
        >
          <el-image
            :src="require('../assets/'+item.src)"
            class="image hvr-grow"
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
    <span class="title">
      相关链接
    </span>
    <el-row gutter="25">
      <el-col :span="7">
        <a
          href="https://www.baidu.com/" 
          style="outline: none;"
        >
          <el-image
            style="width: 289px; height: 48px; left: -17px;"
            :src="require('../assets/'+'relative1.png')" 
          />
        </a>
      </el-col>
      <el-col :span="6">
        <a
          href="https://www.baidu.com/" 
          style="outline: none;"
        >
          <el-image
            style="width: 289px; height: 48px;"
            :src="require('../assets/'+'relative2.png')" 
          />
        </a>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'mainPage',
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
      ],
      sListArr: [
        {
          src: 'energy.png',
          name: '开发区质量赋能站',
        }, 
        {
          src: 'waiting.png',
          name: '质量赋能站建设中...',
        },
        {
          src: 'waiting.png',
          name: '质量赋能站建设中...',
        },
        {
          src: 'waiting.png',
          name: '质量赋能站建设中...',
        }
      ],
      footerList: [
        {
          title: '检测能力',
          contents: ['执行标准', '检测方案', '检测项目']
        }, 
        {
          title: '检测动态',
          contents: [
            '第四分院多措施并举加强党建工作',
            '我院参加"读党史，守初心，担使命"演讲比赛',
             '院各党支部开展8月主题党日活动',
             '院党委理论学习中心组开展2020年度第七次集体学习'
          ]
        },
        {
          title: '关于我们',
          contents: ['公司简介', '可持续发展', '奖项荣誉', '新闻动态']
        }
      ]
    }
  },
  methods() {

  },
}
</script>

<style>
.title {
  width: 256px;
  height: 45px;
  font-family: PingFangSC-Semibold;
  font-size: 32px;
  color: #1B5393;
  letter-spacing: 0;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: -40px;
}
</style>