<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ul class="nav">
          <li class="nav-item">
            <g-link v-if="$route.path === '/'" to="/about">About</g-link>
            <g-link v-if="$route.path === '/about'" to="/">Home</g-link>
          </li>
        </ul>

        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <small class="footer__copyright">Copyright &copy; 2020-{{ new Date().getFullYear() }} fyodor.io</small>
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
    list-style: none;
    margin: 0 12px 0 0;
    padding: 0;
    .nav-item {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
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
}
</style>
