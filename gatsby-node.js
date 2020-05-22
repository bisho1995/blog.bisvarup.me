exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const results = await graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
    allBloggerPost (sort: {order: DESC, fields: [childMarkdownRemark___frontmatter___date]}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              slug
              date(formatString: "DD MMMM YYYY")
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

    allMarkdownRemark.edges.forEach(({ node: { html, frontmatter: { path, date } } }) => {
      if (!path) return;
      createPage({
        path,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: html, date },
      });
    });


    allBloggerPost.edges.forEach(({ node: { childMarkdownRemark: { html, frontmatter: { slug, date } } } }) => {
      if (!slug) return;
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: html, date },
      });
    });
  }
};
