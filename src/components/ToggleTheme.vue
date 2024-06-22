<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme">
    <svg v-if="darkTheme" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m8 20.149v3.851h8v-3.685a6.005 6.005 0 0 1 1.932-4.552 9 9 0 1 0 -12.064-.18 6.263 6.263 0 0 1 2.132 4.566zm6 1.851h-4v-1.851c0-.05-.007-.1-.008-.149h4.024c0 .105-.016.209-.016.315zm-8.94-13.925a7 7 0 1 1 11.553 6.184 7.655 7.655 0 0 0 -2.293 3.741h-1.32v-7.184a3 3 0 0 0 2-2.816h-2a1 1 0 0 1 -2 0h-2a3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 6.96 6.96 0 0 1 -2.17-6.044z"/></svg>

    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.748 5.748 0 0 0 -1.804 3.237h-3.128v-8.184a3 3 0 0 0 2-2.816h-2a1 1 0 0 1 -2 0h-2a3 3 0 0 0 2 2.816v8.184h-3.125a6.538 6.538 0 0 0 -2.007-3.417zm2.132 5.417v3h8v-3z"/></svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme === 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.toggle-theme {
  display: flex;
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  svg {
    transform: rotate(180deg);
  }

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}
</style>