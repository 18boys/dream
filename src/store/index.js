/**
 * @file index
 * @author shuai.li
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dreamObj: {
      userName: '',
      dream: '',
    },
    addressObj: {
      province: '',
      city: '',
      county: '',
      address: '',
      mobile: '',
    },
  },
  mutations: {
    updateDream(state, payload) {
      state.dreamObj = {
        ...state.dreamObj,
        ...payload,
      };
    },
    updateAddress(state, payload) {
      state.addressObj = {
        ...state.addressObj,
        ...payload,
      };
    },
  },
})