/**
 * Created by 熊超超 on 2018/9/25.
 */
import {dayjs} from '../assets/utils'
import $wx from 'minapp-api-promise'
import api from '../global/api'

export default {
  state: {
    tripType: 1, // 单程/往返
    goDate: dayjs().format('YYYY-MM-DD'),
    backDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    depAirPort: {
      cityName: '贵阳',
      airPortCode: 'KWE',
      cityCode: 'KWE',
      area: 'CN',
      airPortName: '龙洞堡国际机场T2航站楼',
      phonetic: 'GUIYANG',
    },
    arrAirPort: {
      cityName: '铜仁',
      airPortCode: 'TEN',
      cityCode: 'TEN',
      area: 'CN',
      airPortName: '凤凰机场',
      phonetic: 'TONGREN',
    },
    selectedFlight: {},
  },
  mutations: {
    changeTripType(state, params) {
      state.tripType = params
    },
    changeAirPort(state) {
      [state.depAirPort, state.arrAirPort] = [state.arrAirPort, state.depAirPort]
    },
    updateFlightDate(state, params) {
      if (params.goDate) state.goDate = params.goDate
      if (params.backDate) state.backDate = params.backDate
    },
    updateAirPort(state, airPort) {
      state.airPort = airPort
    },
    selectFlight(state, flight) {
      state.selectedFlight = flight
    },
  },
  actions: {
    async getAirPort({commit}) {
      let airPort = $wx.getStorageSync('airPort')
      if (!airPort) {
        const {data} = await api.getAirPort()
        if (data) {
          airPort = data.airPort
          $wx.setStorageSync('airPort', airPort)
        }
      }
      commit('updateAirPort', airPort)
    },
  },
}
