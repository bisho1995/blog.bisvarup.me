const path = require('path');
const siteConfig = require('./config/site-config.json');
const customSw = require('./src/custom-sw');

module.exports = {
  siteMetadata: {
    title: siteConfig['site-metadata'].title,
  },
  plugins: [
    {
      /**
       * This is for import aliasing
       */
      resolve: 'gatsby-plugin-root-import',
      /**
       * Make sure the list in tsconfig.json "paths" is same as
       * this list!!
       */
      options: {
        '@': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src', 'component'),
        '@pages': path.join(__dirname, 'src', 'pages'),
        '@config': path.join(__dirname, 'config'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.gaTrackingID,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // {
          //   resolve: 'gatsby-remark-embed-snippet',
          //   options: {
          //     directory: `${__dirname}`,
          //   },
          // },
          // {
          //   resolve: 'gatsby-remark-prismjs',
          //   options: {
          //     directory: `${__dirname}`,
          //   },
          // },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig['site-metadata'].name,
        short_name: siteConfig['site-metadata'].short_name,
        start_url: '/',
        icon: 'src/images/profile-circle.png',
        background_color: siteConfig.pwa.background_color,
        theme_color: siteConfig.pwa.theme_color,
        display: siteConfig.pwa.display,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      // options: {
      //   precachePages: ['*'],
      //   appendScript: require.resolve('./src/custom-sw'),
      // },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 50,
            },
          },
          {
            resolve: 'gatsby-remark-table-of-contents',
            options: {
              exclude: 'Table of Contents',
              tight: false,
              fromHeading: 2,
              toHeading: 6,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              directory: `${__dirname}`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-remark-embed-snippet',
      options: {
        directory: `${__dirname}`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
  ],
};
