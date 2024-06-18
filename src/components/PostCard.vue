<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <!-- TODO replace with custom image and then show on main (not in style now) -->
    <!--<div class="post-card__header">-->
    <!--  <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />-->
    <!--</div>-->
    <div class="post-card__content">
      <h2 class="post-card__title">
        <g-link :to="post.path">{{ post.title }}</g-link>
      </h2>

      <p class="post-card__description" v-html="post.description" />

      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: calc(var(--space) * 0.5);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }
}

// remove top border radius when on mobile
@media screen and (max-width: 650px) {
  .post-card {
    margin-bottom: var(--space);
  }
  .post-card__header {
    border-radius: 0;
  }
}
</style>
