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
