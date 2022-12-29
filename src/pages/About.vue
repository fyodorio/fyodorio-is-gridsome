<template>
  <Layout :show-logo="false">
    <div v-html="$page.posts.edges[0].node.content" />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About the shed dweller'
  }
}
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: false }}) {
    edges {
      node {
        id
        title
        description
        cover_image
        content
      }
    }
  }
}
</page-query>