import Vue from 'vue';
import Vuex from 'vuex';
import {
  YOUTUBE,
  TICKETMASTER,
} from './Api/http-commom';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    youtubeResult: {},
    tickeMasterResult: {},
    eventDetails: {},
  },
  mutations: {
    GET_YOUTUBE_RESULT: (state, payload) => {
      state.youtubeResult = payload;
    },
    GET_TICKET_MASTER_RESULT: (state, payload) => {
      state.tickeMasterResult = payload;
    },
    GET_EVENT_DETAILS: (state, payload) => {
      state.eventDetails = payload;
    },
  },
  actions: {
    SEARCH_YOUTUBE: ({
      commit,
    }, payload) =>
      new Promise((resolve, reject) => {
        YOUTUBE.get('/search', {
          params: {
            q: payload,
          },
        }).then((response) => {
          commit('GET_YOUTUBE_RESULT', response.data);
          resolve(response);
        }).catch((erro) => {
          console.error(erro);
          reject(erro);
        });
      }),
    SEARCH_TICKET_MASTER: ({
      commit,
    }, payload) => new Promise((resolve, reject) => {
      TICKETMASTER.get('events.json', {
        params: {
          keyword: payload,
        },
      }).then((response) => {
        commit('GET_TICKET_MASTER_RESULT', response.data);
		  resolve(response);
      }).catch((error) => {
        console.error(error);
        reject(error);
      });
    }),
    EVENT_DETAILS: ({
      commit,
    }, payload) => new Promise((resolve, reject) => {
      TICKETMASTER.get(`events/${payload}`).then((response) => {
		  commit('GET_EVENT_DETAILS', response.data);
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    }),
  },
});
