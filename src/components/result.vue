<template>
	<section class="result">
		<span v-if="resultYoutubeSearchItems && resultYoutubeSearchItems.length == 0">No results to search term</span>
		<ul>
			<li class="result-item" v-for="(result, index) in resultYoutubeSearchItems" :key="result[index]">
				<details>
					<summary><h2> {{ result.snippet.title }}</h2></summary>
					<div class="result-item--infos">
						<iframe width="100%" height="315" :src="`https://www.youtube.com/embed/${result.id.videoId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						<div>
							datas
						</div>


					</div>

				</details>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    resultYoutubeSearchItems() {
      return this.$store.state.youtubeResult.items;
    },
  },
};
</script>

