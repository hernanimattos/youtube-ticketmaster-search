<template>
	<section class="result">
		<article>
			<span v-if="resultYoutubeSearchItems && resultYoutubeSearchItems.length == 0">No results to search term</span>
			<ul>
				<li class="result-item" v-for="(result, index) in resultYoutubeSearchItems" :key="result[index]">
					<details>
						<summary><h2> {{ result.snippet.title }}</h2></summary>
						<div class="result-item--infos">
							<img :src="result.snippet.thumbnails.high.url" alt="" @click="showVideoModal(result.id.videoId)" class="result-item-video--thumbnail">
							<div class="result-item--channel">
								<h3><strong>Channel: </strong>{{result.snippet.channelTitle}}</h3>
								<p><strong>Description: </strong>{{result.snippet.description}}</p>
								<a :href="`https://www.youtube.com/channel/${result.snippet.channelId}`">See more videos from channel</a>
							</div>
						</div>
					</details>
				</li>
			</ul>
		</article>
		<article v-if="resultTicketMasterEvents">
				<span v-if="resultTicketMasterPage && resultTicketMasterPage.totalElements == 0">No results to search term</span>
			<h2>EVENTS</h2>
			<details v-if="resultTicketMasterEvents != undefined" v-for="event in resultTicketMasterEvents.events" :key="event.id">
				<summary>
					<h2>{{event.name}}</h2>
				</summary>
					<div>
						<h3>Start Sales: {{ event.sales.public.startDateTime | formatDate }}</h3>
						<h3>End Sales: {{ event.sales.public.endDateTime | formatDate }}</h3>
					</div>
			</details>
		</article>
			<modal :videoId="idVideo" :show-data="active" @close="active = $event">
		</modal>
	</section>
</template>

<script>
import modal from './modal.vue';

export default {
  name: 'Result',
  components: {
	  modal,
  },
  data() {
	  return {
		  active: false,
		  idVideo: '',
	  };
  },
  computed: {
    resultYoutubeSearchItems() {
      return this.$store.state.youtubeResult.items;
    },
    resultTicketMasterEvents() {
      return this.$store.state.tickeMasterResult._embedded;
    },
	 resultTicketMasterPage() {
      return this.$store.state.tickeMasterResult.page;
    },
  },
  methods: {
	  showVideoModal(video) {
      this.active = true;
      this.idVideo = video;
	  },
  },
};
</script>

