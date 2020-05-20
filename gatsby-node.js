exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const markdownResults = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              path
            }
            timeToRead
          }
        }
      }
    }
  `);

  if (!markdownResults.errors) {
    markdownResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.frontmatter.path) return;
      createPage({
        path: node.frontmatter.path,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: node.html },
      });
    });
  }

  const bloggerResults = await graphql(`
    {
      allBloggerPost {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                slug
              }
              html
            }
          }
        }
      }
    }
  `);

  if (!bloggerResults.errors) {
    bloggerResults.data.allBloggerPost.edges.forEach(({ node: { childMarkdownRemark } }) => {
      if (!childMarkdownRemark.frontmatter.slug) return;
      createPage({
        path: `/${childMarkdownRemark.frontmatter.slug}`,
        component: require.resolve('./src/templates/Template.tsx'),
        context: { content: childMarkdownRemark.html },
      });
    });
  }
};
