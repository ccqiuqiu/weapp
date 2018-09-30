<!--Created by 熊超超 on 2018/9/26.-->
<template>
  <div>
    <!--横向日历-->
    <!--列表-->
    <flight-item v-if="flightList.length" v-for="(flight, index) in flightList" :key="index" :flight="flight"></flight-item>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import FlightItem from '../components/flightItem'

  export default {
    components: {FlightItem},
    data() {
      return {
        flightList: [],
      }
    },
    computed: {
      ...mapState([]),
    },
    methods: {},
    async mounted() {
      const {data} = await this.$api.searchFlight()
      if (data) {
        this.flightList = data
      }
    },
  }
</script>

<style lang="less" scoped>
</style>
