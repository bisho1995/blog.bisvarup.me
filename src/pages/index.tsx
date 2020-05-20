import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import profilePic from '../images/profile.jpg';
import '../styles/index.scss';

export default function Index({ data }) {
  const edges = data?.allMarkdownRemark?.edges;
  return (
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
          crossOrigin="anonymous"
        />
      </Helmet>
      <header
        style={{
          margin: '32px 0', display: 'flex', justifyContent: 'center',
        }}
      >
        <img
          style={{ borderRadius: '50%', marginRight: 32 }}
          src={profilePic}
          alt="bisvarup mukherjee"
          height={130}
        />
        <h1
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          bisvarup&apos;s blog
        </h1>
      </header>

      <div style={{ textAlign: 'left' }}>
        <ol style={{ lineHeight: 1.5 }}>
          {edges.map(({ node: { frontmatter: { title, path, slug } } }, idx) => (
            <li style={{ margin: '8px 0' }} key={slug || path || idx}>
              <Link to={`/${path || slug}`}>{title}</Link>
            </li>
          ))}
        </ol>
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
            slug
          }
        }
      }
    }
  }
`;
