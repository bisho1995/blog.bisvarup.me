import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import "../styles/index.css";

export default function Index({ data }) {
  const edges = data?.allMarkdownRemark?.edges;
  return (
    <main>
      <Helmet>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
          integrity='sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu'
          crossorigin='anonymous'
        ></link>
      </Helmet>
      <h1>bisvarup's blog</h1>

      <div style={{ textAlign: "left" }}>
        {edges.map(({ node: { frontmatter: { title, path } } }) => (
          <Link to={`/${path}`}>{title}</Link>
        ))}
      </div>
    </main>
  );
}
export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
