<template>
	<main class="home">
		<search/>
		<result/>
	</main>
</template>

<script>
import search from '@/components/search.vue';
import result from '@/components/result.vue';

export default {
  name: 'Home',
  components: {
	  search,
	  result,
  },
};
</script>

