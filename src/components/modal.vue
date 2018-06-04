<template>
<section class="wrapper-modal" :class="{ active: showData}" @click="close($event)">
			<div class="container-modal" >
				<div class="modal">
					<header>
						<span class="close" @click="close($event)">X</span>
					</header>
					<article class="modal-content">
						<iframe width="100%" height="500" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</article>
				</div>
			</div>
		</section>
</template>

<script>
export default {
  name: 'modal',
  props: {
	  showData: {
	  type: Boolean,
	  required: true,
	  default: false,
	  },
	  videoId: {
		  type: [Number, String],
		  required: false,
	  },
  },

  methods: {
	  close(e) {
		  if (e.target.classList.contains('active') || e.target.classList.contains('close')) {
        this.$emit('close', !this.showData);
		  }
	  },
  },
  mounted() {
	  console.log(this.videoId);
  },
};

</script>
<style>

</style>
