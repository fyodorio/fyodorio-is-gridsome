<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  line-height: 200%;

  &__link {
  	margin-right: .7em;
  	font-size: .8em;
    font-weight: 500;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	color: var(--accent-color);
  	padding: .5em;
  	border-radius: var(--radius);
  }
}
</style>