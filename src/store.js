import Vue from 'vue'
import Vuex from 'vuex'
import modles from './models/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { ...modles }
})
