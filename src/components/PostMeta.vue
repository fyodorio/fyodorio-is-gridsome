<template>
   <div class="post-meta">
      <span>Posted on {{ post.date }}. </span>
      <template v-if="post.updatedOn">
        <span>Updated on {{ post.updatedOn }}. </span>
      </template>
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>