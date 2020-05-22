import React from 'react';
import { graphql, Link } from 'gatsby';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import styles from '../styles/index.module.scss';
import Helmet from '../component/Helmet/Helmet';


export default withErrorBoundary(({ data }) => {
  const edges = data?.allMarkdownRemark?.edges;

  return (
    <main>
      <Helmet />
      <header
        className={styles.header}
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
          {edges.map(({
            node: {
              frontmatter: {
                title, path, slug, date,
              },
            },
          }, idx) => (
            <li style={{ margin: '8px 0' }} key={slug || path || idx}>
              <Link to={`/${path || slug}`}>
                [
                {date}
                ]
                {' '}
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
});


export const query = graphql`
query HomePageQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          path
          slug
          date(formatString: "DD MMM YYYY")
        }
      }
    }
  }
}
`;
