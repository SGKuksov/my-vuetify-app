import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: '',
    message: ''
  },
  actions: {
    LOAD_DATA({ commit }) {
      axios
        .get('https://picsum.photos/list')
        .then(response => {
          commit('GET_DATA', response.data)
        })
        .catch(error => window.console.log(error)); // обработка ошибок
    },
  },
  mutations: {
    GET_DATA: (state, info) => {
      state.info = info
    },
    updateMessage (state, message) {
      state.message = message
    }
  },
  getters: {

  },
  modules: {
    // The modules object provides a way to split your store in multiple stores, but allow them to all remain part of the store tree.
  },
});
