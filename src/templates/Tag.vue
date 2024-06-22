<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in filteredPosts" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D MMMM YYYY")
            updatedOn (format: "D MMMM YYYY")
            timeToRead
            tags {
              id
              title
              path
            }
            description
            content
            published
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo () {
    return {
      title: this.$page.tag.title
    }
  },
  computed: {
    // cutting out unpublished stuff (including pseudo-page posts)
    filteredPosts() {
      return this.$page.tag.belongsTo.edges.filter(edge => edge.node.published);
    }
  }
}
</script>
