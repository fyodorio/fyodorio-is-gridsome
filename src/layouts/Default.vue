<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ul class="nav">
          <li class="nav-item" v-if="$route.path !== '/links'">
            <g-link to="/links">Links</g-link>
          </li>
          <li class="nav-item" v-if="$route.path !== '/about'">
            <g-link to="/about">About</g-link>
          </li>
        </ul>

        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <small class="footer__copyright">Copyright &copy; 2019-{{ new Date().getFullYear() }} fyodor.io</small>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  .nav {
    display: flex;
    gap: 1em;
    list-style: none;
    margin: 0 12px 0 0;
    padding: 0;
    .nav-item {
      margin: 0;
      padding: 0;
      font-family: 'Walter Turncoat', sans-serif;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
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
