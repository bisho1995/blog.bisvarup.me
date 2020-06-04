exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const results = await graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            path
            slug
            date(formatString: "DD MMMM, YYYY")
            title
          }
          html
        }
      }
    }
    allBloggerPost(sort: {order: DESC, fields: [childMarkdownRemark___frontmatter___date]}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              slug
              date(formatString: "DD MMMM, YYYY")
              title
            }
            html
          }
        }
      }
    }
  }
  
  
  `);
  if (!results.errors) {
    const { allMarkdownRemark, allBloggerPost } = results.data;

    allMarkdownRemark.edges.forEach(({ node: { html, frontmatter: { path, date, title,slug } } }) => {
      if (!path) return;
      createPage({
        path,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: html, date, title,slug },
      });
    });


    allBloggerPost.edges.forEach(({ node: { childMarkdownRemark: { html, frontmatter: { slug, date, title } } } }) => {
      if (!slug) return;
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: html, date, title,slug },
      });
    });
  }
};
