<!--Created by 熊超超 on 2018/9/27.-->
<template>
  <div>
    {{flight}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState({
        flight: state => state.common.selectedFlight,
      }),
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
</style>
