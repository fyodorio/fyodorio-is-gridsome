<template>
	<div class="author">

    <!-- TODO either find a proper image, or just get rid of it -->
		<!--<g-image alt="Author image" class="author__image" src="https://res.cloudinary.com/fyodorio/image/upload/q_auto,f_auto/v1673112865/my-logos/author_wudaur.jpg" width="180" height="180" blur="5" />-->

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			{{ $static.metadata.siteDescription }}
		</p>

		<p class="author__links">
      <a href="https://www.linkedin.com/in/fyodorio/" target="_blank">LinkedIn</a>
			<a href="https://github.com/fyodorio" target="_blank">GitHub</a>
			<a href="https://dev.to/fyodorio" target="_blank">DEV</a>
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
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
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
