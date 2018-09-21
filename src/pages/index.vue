<template>
  <div class="container flex">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>

    <i-button @click="handleClick" type="info">{{text}}</i-button>
    <i class="icon iconfont icon-tag"></i>
  </div>
</template>

<script>
import card from '@/components/card'
import mixins from '../global/mixins'

export default {
  mixins: [mixins.base],
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      text: 'info'
    }
  },

  components: {
    card
  },

  methods: {
    handleClick () {
      this.text = 'hahah'
    },
    bindViewTap () {
      const url = '/packageA/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    }
  },

  async onLoad () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    console.log(this.$wx, this.$store, this.$router)
    const re = await this.$wx.getNetworkType()
    console.log(re)
    const {data, error} = await this.$api.test()
    console.log(data, error)
  }
}
</script>

<style lang="less" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
