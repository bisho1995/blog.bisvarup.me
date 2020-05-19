const axios = require("axios");
var convert = require("xml-js");
const idx = require("idx");


const getBlogSpotFeeds = (url) =>
  axios
    .get(url)
    .then((xml) => convert.xml2json(xml.data, { compact: true, spaces: 4 }))
    .then((r) => JSON.parse(r))
    .then((json) => {
      const feeds = (idx(json, (_) => _.feed.entry) || []).map(
        ({ content: { _text: content }, title: { _text: title } }) => ({
          title: title
            .split(" ")
            .map((a) => a.toLowerCase())
            .join("-")
            .replace(/[^a-z0-9-]/g, ""),
          content,
        })
      );
      return feeds;
    });

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
        component: require.resolve(`./src/templates/Template.tsx`),
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
    bloggerResults.data.allBloggerPost.edges.forEach(({ node: {childMarkdownRemark} }) => {
      if(!childMarkdownRemark.frontmatter.slug)return
      createPage({
        path: `/${childMarkdownRemark.frontmatter.slug}`,
        component: require.resolve(`./src/templates/Template.tsx`),
        context: { content: childMarkdownRemark.html },
      });
    });
  }
};
