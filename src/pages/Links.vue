<template>
  <Layout>
    <div class="subpage-title">
      <h1>
        {{ $page.posts.edges[0].node.title }}
      </h1>
    </div>

    <div class="subpage-text content-box">
      <div class="subpage-text__header">
        <g-image alt="Cover image" v-if="$page.posts.edges[0].node.cover_image" :src="$page.posts.edges[0].node.cover_image" />
      </div>

      <div class="subpage-text__content" v-html="$page.posts.edges[0].node.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Links'
  }
}
</script>

<page-query>
query {
  posts: allPost(filter: { title: { eq: "Find me on..." }}) {
    edges {
      node {
        title
        content
        cover_image
      }
    }
  }
}
</page-query>

<style lang="scss">
// styles brought from Post.vue for consistency
.subpage-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
.subpage-text {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    li {
      ul, p {
        margin-bottom: 0.6em;
      }
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  &__content > p:first-child {
    font-size: 1.2em;
    color: var(--title-color);
  }
}

// remove top border radius when on mobile
@media screen and (max-width: 650px) {
  .subpage-text__header {
    border-radius: 0;
  }
}
</style>
