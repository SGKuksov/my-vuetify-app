import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: '',
    posts: [],
    message: '',
    results: []
  },
  actions: {
    LOAD_DATA({ commit }) {
      axios
        .get('https://picsum.photos/list')
        .then(response => {
          commit('GET_DATA', response.data)
        })
        .catch(error => window.console.log(error));
    },
    LOAD_POST({ commit }) {
      const endpoint = 'https://jsonplaceholder.typicode.com/posts';
      let options = {
        params: {
          _start: 10,
          _limit: 15
        },
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios
        .get(endpoint, options)
        .then(response => {
          commit('GET_POST', response.data)
        })
        .catch(error => window.console.log(error));
    },
    search({ commit }, query) {
      const url = 'https://ru.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + query

      axios
        .get(url)
        .then(response => {
          const results = response.query.search
          
          commit('set', {
            type: 'results',
            items: results
          })
        })
        .catch(error => window.console.log(error));
    }
  },
  mutations: {
    GET_DATA: (state, info) => {
      state.info = info
    },
    GET_POST: (state, posts) => {
      state.posts = posts
    },
    updateMessage(state, message) {
      state.message = message
    },
    set(state, { type, items }) {
      state[type] = items
    }
  },
  getters: {
    results(state) {
      let results = state.results

      return results.map(item => {
        item.url = 'https://ru.wikipedia.org/wiki/' + item.title
        return item
      })
    }
  },
  modules: {
    // The modules object provides a way to split your store in multiple stores, but allow them to all remain part of the store tree.
  },
});