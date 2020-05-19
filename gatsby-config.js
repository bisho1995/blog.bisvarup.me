module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
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
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
  ],
};
