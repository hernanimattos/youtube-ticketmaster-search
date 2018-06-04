<template>
	<main>
		<form @submit.prevent="searchTerms" class="form-search" :class="{'top':(youtubeResult.items && youtubeResult.items.length > 0)}">
			<input type="text" name="" id="" placeholder="Ex: r2" v-model="search">
			<input type="submit" value="Buscar">
		</form>
	</main>
</template>

<script>
export default {
  name: 'Search',
  data() {
	  return {
		  search: '',
	  };
  },
  computed: {
    youtubeResult() {
      return this.$store.state.youtubeResult;
    },
  },
  methods: {
    searchTerms() {
      this.$root.$emit('search', this.search.replace(/\s/g, '+'));
      this.$store.dispatch('SEARCH_YOUTUBE', this.search.replace(/\s/g, '+'));
      this.search = '';
    },
  },
};
</script>

