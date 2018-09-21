<!--Created by 熊超超 on 2018/9/21.-->
<template>
  <div>
    <i-panel title="登录" hide-border v-if="isLogin">
      <i-input v-model="user.name" @change="e => inputChange('name', e)" type="number" maxlength="11"  title="手机号" autofocus placeholder="请输入手机号" />
      <i-input v-model="user.password" @change="e => inputChange('password', e)" type="password" maxlength="32" title="密码" placeholder="请输入密码" />
      <i-button @tap="onLogin" :loading="loading" type="primary">登录</i-button>
    </i-panel>

    <i-panel title="注册" hide-border v-else>
      <i-input v-model="user.name" @change="e => inputChange('name', e)" type="number" maxlength="11"  title="手机号" autofocus placeholder="请输入手机号" />
      <i-input v-model="user.password" @change="e => inputChange('password', e)" type="password" maxlength="32" title="密码" placeholder="请输入密码" />
      <i-input v-model="user.password2" @change="e => inputChange('password2', e)" type="password" maxlength="32" title="密码" placeholder="请输入密码" />
      <i-button @tap="onReg" :loading="loading" type="primary" open-type="getUserInfo" @getuserinfo="onGetUserInfo">注册</i-button>
    </i-panel>

    <view class="flex main-between f-12 m-h-20">
      <text @tap="changeLoginOrReg">{{isLogin ? '注册': '登录'}}</text>
      <navigator url="/pages/demo" open-type="switchTab">忘记密码？</navigator>
    </view>

    <i-message id="message" />
  </div>

</template>

<script>
  export default {
    components: {},
    data () {
      return {
        isLogin: true,
        loading: false,
        user: {
          name: '18688409494',
          password: '123456',
          password2: '123456'
        }
      }
    },
    computed: {
    },
    watch: {
      isLogin: {
        handler: function (val) {
          this.$utils.setTitle(val ? '登录' : '注册')
        }
      }
    },
    methods: {
      changeLoginOrReg () {
        this.isLogin = !this.isLogin
      },
      inputChange (key, e) {
        this.user[key] = e.target.detail.value
      },
      async onLogin () {
        if (this.loading) {
          return
        }
        this.loading = true
        const re = await this.$wx.login()
        const {data} = await this.$api.login({code: re.code, ...this.user})
        if (data) {
          this.success(data.token, '登录成功')
        } else {
          this.loading = false
        }
      },
      onReg () {
        if (this.loading) {
          return
        }
        this.loading = true
        this.allowReg = true
      },
      async onGetUserInfo (info) {
        if (!this.allowReg) {
          return
        }
        this.allowReg = false
        const re = await this.$wx.login()
        const {data} = await this.$api.reg({code: re.code, encryptedData: info.target.encryptedData, iv: info.target.iv, ...this.user})
        if (data) {
          this.success(data.token, '注册成功，将自动登录')
        } else {
          this.loading = false
        }
      },
      success (token, msg) {
        this.$wx.setStorageSync('token', token)
        this.$utils.message(msg, 'success', 1000)
        setTimeout(() => {
          this.loading = false
          this.$router.push({path: '/pages/index', isTab: true})
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
