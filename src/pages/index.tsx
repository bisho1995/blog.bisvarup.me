import React from 'react';
import { graphql, Link } from 'gatsby';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import Helmet from '../component/Helmet/Helmet';
import CircularDot from '../component/CircularDot/CircularDot';

export default withErrorBoundary(({ data }) => {
  const edges = data?.allMarkdownRemark?.edges;

  return (
    <main className="p-4 container mx-auto">
      <Helmet />
      <header className="flex-row justify-center md:m-16 sm:block md:flex">
        <img
          src={profilePic}
          alt="bisvarup mukherjee"
          height={130}
          className="h-32 m-auto md:mr-4 md:ml-0 rounded-full"
        />
        <div className="m-0">
          <h1 className="text-3xl flex flex-col justify-center mb-0">
            bisvarup&apos;s blog
          </h1>
          <h2 className="text-gray-600">
            Developer
            <CircularDot top={-3} />
            {' '}
            Story teller
            <CircularDot top={-3} />
            {' '}
            Polyglot Programmer
          </h2>
        </div>
      </header>

      <div className="text-left">
        <div className="leading-normal">
          {edges.map(
            (
              {
                node: {
                  excerpt,
                  timeToRead,
                  frontmatter: {
                    title, path, slug, date,
                  },
                },
              },
              idx: number,
            ) => (
              <div className="my-12" key={slug || path || idx}>
                <Link to={`/${path || slug}`} className="text-purple-900 text-lg font-medium">
                  {title}
                  <p className="text-xs text-gray-600">
                    {date}
                    <CircularDot />
                    {timeToRead}
                    {' '}
                    min
                  </p>
                  <p className="text-gray-700 text-sm">{excerpt}</p>
                </Link>
              </div>
            ),
          )}
        </div>
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
          excerpt(pruneLength: 250)
          timeToRead
        }
      }
    }
  }
`;
