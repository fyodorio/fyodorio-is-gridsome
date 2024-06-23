<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <section class="posts">
      <PostCard v-for="edge in paginatedData" :key="edge.node.id" :post="edge.node"/>
    </section>

    <section class="pagination">
      <button type="button" @click="changePage(1)" :disabled="currentPage === 1">First</button>
      <button type="button" @click="previousPage" :disabled="currentPage === 1">Previous</button>

      <div>Drawer {{ currentPage }} of {{ totalPages }}</div>

      <button type="button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      <button type="button" @click="changePage(totalPages)" :disabled="currentPage === totalPages">Last</button>
    </section>

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

export default {
  // The JS hassle is for pagination mostly
  data() {
    return {
      perPage: 5
    }
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.drawer) || 1;
    },
    totalPages() {
      return Math.ceil(this.$page.posts.edges.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.$page.posts.edges.slice(start, end);
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$router.push({ query: { drawer: pageNumber }});
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.changePage(this.currentPage + 1);
    },
    previousPage() {
      if (this.currentPage > 1) this.changePage(this.currentPage - 1);
    }
  },
  // cover out-of-bounds values edge cases
  beforeMount() {
    if (this.currentPage > this.totalPages) {
      // Force navigation to the last drawer if 'drawer' exceeds total drawers
      this.changePage(this.totalPages);
    } else if (this.currentPage < 1) {
      // Force navigation to the first drawer if 'drawer' is less than 1
      this.changePage(1);
    }
  },
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-family: 'Walter Turncoat', sans-serif;
  font-weight: 600;
  button {
    // reset button styles
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: var(--link-color);
    font: inherit;
    line-height: normal;
    cursor: pointer;
    &:disabled {
      filter: opacity(40%);
      cursor: not-allowed;
    }
  }
}
</style>