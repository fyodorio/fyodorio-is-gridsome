<template>
  <div id="app">
    <Header :show-logo="showLogo" />

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <Copyright />
    </footer>

  </div>
</template>

<script>
import Header from '~/components/Header';
import Copyright from '~/components/Copyright.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Header,
    Copyright
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 1.5vw 15px 0;
  gap: calc(var(--space) * 0.5);
}

// make content box full-width when on mobile
@media screen and (max-width: 650px) {
  .main {
    padding-left: 0;
    padding-right: 0;
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
  flex-shrink: 0;
}
</style>
