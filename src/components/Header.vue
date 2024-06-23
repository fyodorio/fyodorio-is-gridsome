<template>
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
    ToggleTheme,
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
</style>