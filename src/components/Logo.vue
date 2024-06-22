<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
	    &larr; Back to shed
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
	text-decoration: none;
  color: var(--accent-color);
  font-weight: 500;
  &__text {
    font-family: 'Walter Turncoat', sans-serif;
    font-weight: 600;
  }

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}
}
</style>
