<template>
  <div>
    <!--广告-->
    <swiper :indicator-dots="true" :autoplay="true">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item"/>
        </swiper-item>
      </block>
    </swiper>
    <!--标签-->
    <i-tabs :current="tripType" @change="handleChange">
      <i-tab key="1" title="单程"></i-tab>
      <i-tab key="2" title="往返"></i-tab>
    </i-tabs>
    <!--表单-->
    <div class="m-h-30 m-v-50">
      <div class="flex main-between c-sub f-13">
        <span>出发地</span>
        <span>目的地</span>
      </div>
      <div class="b-b city flex cross-center p-v-20">
        <span class="item grow-1 air-port" :class="{'dep': translate === 1}">{{depAirPort.cityName}}</span>
        <view @click="handleChangeAirPort" :class="['change-icon', {rotate: rotate}]"><i class="iconfont icon-change c-p f-20"></i></view>
        <span class="item grow-1 a-r air-port" :class="{'arr': translate === 1}">{{arrAirPort.cityName}}</span>
      </div>
      <div class="b-b p-v-16 flex main-between">
        <picker mode="date" :value="goDate" :start="startDate" @change="goDateChange">
          <view class="picker flex cross-baseline">
            <span class="f-18">{{goDate}}</span>
            <span class="c-sub f-13 m-l-10">{{goWeek}}</span>
          </view>
        </picker>
        <picker v-if="tripType === 2" mode="date" :value="backDate" :start="startDate" @change="backDateChange">
          <view class="picker flex cross-baseline">
            <span class="f-18">{{backDate}}</span>
            <span class="c-sub f-13 m-l-10">{{backWeek}}</span>
          </view>
        </picker>
      </div>
    </div>

    <i-button @click="search" type="primary">查询航班</i-button>
  </div>
</template>

<script>
import mixins from '../global/mixins'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [mixins.base],
  data () {
    return {
      current: 1,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      startDate: this.$date().format('YYYY-MM-DD'),
      depCity: '贵阳',
      translate: 0,
      rotate: false
    }
  },

  computed: {
    ...mapState({
      tripType: state => state.common.tripType,
      goDate: state => state.common.goDate,
      backDate: state => state.common.backDate,
      depAirPort: state => state.common.depAirPort,
      arrAirPort: state => state.common.arrAirPort
    }),
    goWeek () {
      return this.$date(this.goDate).format('dddd')
    },
    backWeek () {
      return this.$date(this.backDate).format('dddd')
    }
  },

  methods: {
    ...mapMutations(['changeTripType', 'changeAirPort', 'updateFlightDate']),
    ...mapActions(['getAirPort']),
    handleChange ({target}) {
      this.changeTripType(Number(target.key))
    },
    handleChangeAirPort () {
      this.rotate = !this.rotate
      this.translate = 1
      setTimeout(() => {
        this.changeAirPort()
        this.translate = 0
      }, 300)
    },
    goDateChange ({target}) {
      this.updateFlightDate({goDate: target.value})
    },
    backDateChange ({target}) {
      this.updateFlightDate({backDate: target.value})
    }
  },

  async onLoad () {
    // // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    // console.log(this.$wx, this.$store, this.$router)
    // const re = await this.$wx.getNetworkType()
    // console.log(re)
    // const {data, error} = await this.$api.test()
    // console.log(data, error)
    this.getAirPort()
  }
}
</script>

<style lang="less" scoped>
  @import "../assets/css/vars";
  swiper{
    height: 300px;
    image{
      width: 100%;
    }
  }
  .city{
    font-size: 28 * @font;
  }
  .change-icon{
    transition: all 0.3s;
    transform: rotate(0deg);

    &.rotate{
      transform: rotate(180deg);
    }
  }
  .air-port{
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition-timing-function: ease-out;
  }
  .dep{
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
  .arr{
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
</style>
