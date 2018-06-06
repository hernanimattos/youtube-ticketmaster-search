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
		<article v-if="resultTicketMasterEvents" class="result-events">
				<span v-if="resultTicketMasterPage && resultTicketMasterPage.totalElements == 0">No results to search term</span>
			<h2>EVENTS</h2>
			<div class="result-events-details" v-if=" Object.keys(eventDetails).length > 0">
					<p>Event Date: {{eventDetails.dates.start.dateTime | formatDate}} </p>
					<p>Start Sales: {{ eventDetails.sales.public.startDateTime | formatDate }}</p>
					<p>End Sales: {{ eventDetails.sales.public.endDateTime | formatDate }}</p>
					<div>
						<address>
							<p>Local name: {{ eventDetails._embedded.venues[0].name}}</p>
							<p>More informations about locale  <a :href="eventDetails._embedded.venues[0].url">see on website</a></p>
							<p>Country: {{eventDetails._embedded.venues[0].country.name}}</p>
						</address>
						<img :src="eventDetails.images[3].url" >
					</div>

				</div>
				<div class="list-events">
					<details v-if="resultTicketMasterEvents != undefined" v-for="event in resultTicketMasterEvents.events" :key="event.id" @click="detailsEvent(event.id)">
						<summary>
							<h2>{{event.name}}</h2>
						</summary>
					</details>
				</div>
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
      eventDetails: {},
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
    resultEventDetails() {
      return this.$store.state.eventDetails;
    },
  },
  methods: {
    showVideoModal(video) {
      this.active = true;
      this.idVideo = video;
    },
    detailsEvent(eventId) {
      this.toogleLading();
      this.$store.dispatch('EVENT_DETAILS', eventId).then((response) => {
        this.eventDetails = {};
        this.eventDetails = response.data;
        window.scrollTo(500, 0);
      });
    },
    toogleLading() {
      this.loading = !this.loading;
    },
  },
};
</script>
