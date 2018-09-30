<!--Created by 熊超超 on 2018/9/26.-->
<template>
  <i-card full :title="flight.baseInfo.flightNo" :extra="flight.departAirPort.time + '-' + flight.arriveAirPort.time">
    <i-cell-group slot="content">
      <i-cell @click="selected(cabin)" :title="cabin.name" v-for="(cabin, index) in flight.cabinInfo" :key="index" :value="cabin.phyPrice"></i-cell>
    </i-cell-group>
  </i-card>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    components: {},
    props: ['flight'],
    data() {
      return {}
    },
    computed: {
      ...mapState([]),
    },
    methods: {
      ...mapMutations(['selectFlight']),
      selected(cabin) {
        this.selectFlight({flight: this.flight, cabin})
        this.$router.push('/pages/book')
      },
    },
  }
</script>

<style lang="less" scoped>
</style>
