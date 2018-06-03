<template>
	<main>
		<form @submit.prevent="searchTerms" class="form-search" :class="{'top':(resultSearchCount > 0)}">
			<input type="text" name="" id="" placeholder="Ex: r2" v-model="search">
			<input type="submit" value="Buscar">
		</form>
		<span class="result-total" v-if="this.resultSearchCount > 0">Total: {{this.resultSearchCount}}</span>
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
    resultSearchCount() {
      return '';
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

