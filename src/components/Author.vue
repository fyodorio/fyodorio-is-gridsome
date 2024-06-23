<template>
	<div class="author">
		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			{{ $static.metadata.siteDescription }}
		</p>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
	  siteDescription
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding-top: calc(var(--space) / 2);

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
    margin-bottom: 0; // reset default p tag style
	}

	&__site-title {
		font-size: 2em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}

@media screen and (max-width: 650px) {
  .author__intro {
    padding: 0 calc(var(--space) / 2) 0 calc(var(--space) / 2);
  }
}
</style>
