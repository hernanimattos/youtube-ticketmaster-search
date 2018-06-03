import Vue from 'vue';
import Vuex from 'vuex';
import { YOUTUBE, TICKETMASTER } from './Api/http-commom';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  youtubeResult: {},
	  tickeMasterResult: {},
  },
  mutations: {
	  GET_YOUTUBE_RESULT: (state, payload) => {
    	  state.youtubeResult = payload;
	  },
	  GET_TICKE_MASTER_RESULT: (state, payload) => {
		  state.tickeMasterResult = payload;
	  },
  },
  actions: {
    SEARCH_YOUTUBE: ({ commit }, payload) =>
      new Promise((resolve, reject) => {
		  YOUTUBE.get('/search', {
			  params: {
				  q: payload,
			  },
		  }).then((response) => {
		  	console.log(response, 'result youtube');
		  	commit('GET_YOUTUBE_RESULT', response.data);
		  }).catch((erro) => {
		  	console.error(erro);
		  });
      }),
  },
  SEARCH_TICKET_MASTER: ({ commit }, payload) => new Promise((resolve, reject) => {
    TICKETMASTER.get('?events.json', {
      params: {
        keyword: payload,
      },
    }).then((response) => {
      commit('GET_TICKE_MASTER_RESULT', response);
    }).catch((error) => {
      console.error(erro);
    });
  }),
});
