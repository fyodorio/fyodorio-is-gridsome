<template>
  <section class="pagination">
    <button class="pagination__enhancement" type="button" @click="$emit('changePage', 1)" :disabled="currentPage === 1">First</button>
    <button type="button" @click="$emit('changePage', currentPage - 1)" :disabled="currentPage === 1">Previous</button>

    <div>Drawer {{ currentPage }} of {{ totalPages }}</div>

    <button type="button" @click="$emit('changePage', currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    <button class="pagination__enhancement" type="button" @click="$emit('changePage', totalPages)" :disabled="currentPage === totalPages">Last</button>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
  },
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

// hide additional shortcut buttons on narrow mobile screens
@media screen and (max-width: 440px) {
  .pagination__enhancement {
    display: none;
  }
}
</style>
