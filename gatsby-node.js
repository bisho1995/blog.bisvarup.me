const axios = require("axios");
var convert = require("xml-js");
const idx = require("idx");
const fs = require("fs-extra");

const blogspotUrls = [
  // "https://ps-and-ds.blogspot.com/feeds/posts/default",
  // "https://frontend-bytes.blogspot.com/feeds/posts/default",
];

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

  const feeds = [];

  for (let i = 0; i < blogspotUrls.length; i++)
    feeds.push(...(await getBlogSpotFeeds(blogspotUrls[i])));

  const names = feeds.map(({ title }) => title);
  fs.writeFile("titles.json", JSON.stringify(names));

  feeds.forEach(({ title, content }) => {
    createPage({
      path: `/${title}`,
      component: require.resolve(`./src/templates/Template.tsx`),
      context: { content },
    });
  });

  const result = await graphql(`
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

  if (!result.errors) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log("path", node.html );
      createPage({
        path: node.frontmatter.path,
        component: require.resolve(`./src/templates/Template.tsx`),
        context: { content: node.html },
      });
    });
  }
};
