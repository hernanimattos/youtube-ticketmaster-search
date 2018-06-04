<template>
	<section class="result">
		<span v-if="resultYoutubeSearchItems && resultYoutubeSearchItems.length == 0">No results to search term</span>
		<ul>
			<li class="result-item" v-for="(result, index) in resultYoutubeSearchItems" :key="result[index]">
				<details>
					<summary><h2> {{ result.snippet.title }}</h2></summary>
					<div class="result-item--infos">
						<img :src="result.snippet.thumbnails.medium.url" alt="" @click="showVideoModal(result.id.videoId)">
						<div>
							datas
						</div>
					</div>

				</details>
			</li>
		</ul>
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
    resultTicketMaster() {
      return this.$store.state.tickeMasterResult;
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

