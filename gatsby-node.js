exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions;

  const results = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              date(formatString: "DD MMMM, YYYY")
              title
              featuredImage {
                relativePath
                childImageSharp {
                  fixed(width: 150, height:150, quality: 90) {
                    src
                  }
                }
              }
              tags
            }
            html
          }
        }
      }
    }
  `);
  if (!results.errors) {
    const {allMarkdownRemark} = results.data;

    const res = [];
    allMarkdownRemark.edges.forEach(
      ({
        node: {
          frontmatter: {
            path,
            date,
            title,
            slug,
            featuredImage: {
              childImageSharp: {
                fixed: {src},
              },
            },
            tags,
          },
        },
      }) => {
        if (!path) return;
        res.push({
          date,
          title,
          slug,
          path,
          image: src,
          tags,
        });
      },
    );

    const newPosts = res
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10 + 1);

    allMarkdownRemark.edges.forEach(
      ({
        node: {
          html,
          frontmatter: {
            path,
            date,
            title,
            slug,
            featuredImage: {relativePath},
            tags,
          },
        },
      }) => {
        if (!path) return;
        createPage({
          path,
          component: require.resolve('./src/templates/Template.tsx'),
          context: {
            content: html,
            date,
            title,
            slug,
            newPosts,
            image: relativePath,
            tags,
            url: path,
          },
        });
      },
    );
  }
};
