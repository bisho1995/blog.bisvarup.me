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
            image
            tags
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

    const res = [];
    allMarkdownRemark.edges.forEach(({
      node: {
        frontmatter: {
          path, date, title, slug, image, tags,
        },
      },
    }) => {
      if (!path) return;
      res.push({
        date, title, slug, path, image, tags,
      });
    });


    allBloggerPost.edges.forEach(({ node: { childMarkdownRemark: { frontmatter: { slug, date, title } } } }) => {
      if (!slug) return;
      res.push({
        date, title, slug,
      });
    });

    const newPosts = res.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10 + 1);


    allMarkdownRemark.edges.forEach(({
      node: {
        html, frontmatter: {
          path, date, title, slug,
        },
      },
    }) => {
      if (!path) return;
      createPage({
        path,
        component: require.resolve('./src/templates/Template.tsx'),
        context: {
          content: html, date, title, slug, newPosts,
        },
      });
    });


    allBloggerPost.edges.forEach(({ node: { childMarkdownRemark: { html, frontmatter: { slug, date, title } } } }) => {
      if (!slug) return;
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/Template.tsx'),
        context: {
          content: html, date, title, slug, newPosts,
        },
      });
    });
  }
};
