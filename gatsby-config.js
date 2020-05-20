module.exports = {
  siteMetadata: {
    title: "bisvarp's blog",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {
              directory: `${__dirname}`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              directory: `${__dirname}`,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: "AIzaSyCAUmu4sLHAbY-rJ0CtE5Us5nqGkU-bKUE",
        blogId: "2489840993730908370",
      },
    },
    {
      resolve: "gatsby-source-blogger",
      options: {
        apiKey: "AIzaSyCAUmu4sLHAbY-rJ0CtE5Us5nqGkU-bKUE",
        blogId: "6844715559496278267",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "bisvarp's blog",
        short_name: "bisvarup's blog",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
  ],
};
