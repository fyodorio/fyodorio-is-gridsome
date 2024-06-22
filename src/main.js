// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Preload Google Fonts
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: 'anonymous'
  })
  head.link.push({
    rel: 'preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap'
  })
  head.link.push({
    rel: 'preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:400,600&display=swap'
  })

  // Load Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:400,600&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}