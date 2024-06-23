<template>
  <Layout>
    <h1 class="tag-title text-center">
      # {{ $page.tag.title }}
    </h1>

    <section class="posts">
      <PostCard v-for="edge in paginatedData" :key="edge.node.id" :post="edge.node"/>
    </section>

    <Pagination
        v-if="filteredEntityList.length > perPage"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @changePage="changePage"
    />
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
import Author from '~/components/Author.vue';
import PostCard from '~/components/PostCard.vue';
import Pagination from '~/components/Pagination.vue';
import paginationMixin from '~/mixins/pagination-mixin';

export default {
  mixins: [paginationMixin],
  computed: {
    // cutting out unpublished stuff (including pseudo-page posts)
    filteredEntityList() {
      return this.$page.tag.belongsTo.edges.filter(edge => edge.node.published);
    }
  },
  components: {
    Author,
    PostCard,
    Pagination
  },
  metaInfo () {
    return {
      title: this.$page.tag.title
    }
  }
}
</script>
