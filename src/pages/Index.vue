<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
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
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        updatedOn (format: "D MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import Pagination from '~/components/Pagination.vue';
import paginationMixin from '~/mixins/pagination-mixin';

export default {
  mixins: [paginationMixin],
  computed: {
    filteredEntityList() {
      return this.$page.posts.edges;
    }
  },
  components: {
    Author,
    PostCard,
    Pagination
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
