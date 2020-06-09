module.exports = {
  siteMetadata: {
    title: "bisvarp's blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              directory: `${__dirname}`,
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
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: 'AIzaSyCAUmu4sLHAbY-rJ0CtE5Us5nqGkU-bKUE',
        blogId: '2489840993730908370',
      },
    },
    {
      resolve: 'gatsby-source-blogger',
      options: {
        apiKey: 'AIzaSyCAUmu4sLHAbY-rJ0CtE5Us5nqGkU-bKUE',
        blogId: '6844715559496278267',
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
        name: "bisvarup's blog",
        short_name: "bisvarup's blog",
        start_url: '/',
        icon: 'src/images/profile-circle.png',
        /** todo: use my colors */
        background_color: '#f7f0eb',
        theme_color: '#44337a',
        display: 'standalone',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'G-WFL8VY65FQ',
      },
    },
  ],
};
