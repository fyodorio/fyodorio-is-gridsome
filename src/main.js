// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Preload Google Fonts
  head.link.push({
    rel: 'preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=optional'
  })
  head.link.push({
    rel: 'preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css?family=Poppins:400,600&display=optional'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}