// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Fyodor\'s digital shed',
  siteDescription: 'Essays on practical and ethical software design, engineering, development, and maintenance using both modern and ancient technologies.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridmix/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            '@gridmix/remark-prismjs'
          ]
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridmix/remark-prismjs'
      ]
    }
  },

  chainWebpack (config) {
    // sass@1.x ships sass.dart.js with dynamic require() calls that webpack
    // can't statically extract. The warning is harmless (sass compiles fine)
    // but the dev-server overlay blocks every page. Suppress it here, scoped
    // to this project where implementation: require('sass') is the cause.
    config.merge({
      ignoreWarnings: [
        {
          module: /node_modules[/\\]sass[/\\]sass\.dart\.js/,
          message: /Critical dependency/
        }
      ]
    })
  },

  css: {
    loaderOptions: {
      scss: {
        implementation: require('sass')
      },
      sass: {
        implementation: require('sass'),
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  }
}
