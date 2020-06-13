import React from 'react';
import { graphql } from 'gatsby';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import Helmet from '../component/Helmet/Helmet';
import CircularDot from '../component/CircularDot/CircularDot';
import Post from '../component/Post/Post';
import Footer from '../component/Footer/Footer';

export default withErrorBoundary(({ data }) => {
  const edges = data?.allMarkdownRemark?.edges;

  return (
    <>
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
          <div className="leading-normal flex flex-wrap justify-around">
            {edges.map(
              ({
                node: {
                  excerpt,
                  timeToRead,
                  frontmatter: {
                    title, path, slug, date, tags, featuredImage: { childImageSharp: { fluid: image } },
                  },
                },
              }) => (
                <Post
                  path={path}
                  slug={slug}
                  title={title}
                  date={date}
                  timeToRead={timeToRead}
                  excerpt={excerpt}
                  tags={tags}
                  image={image}
                  key={slug || path || title}
                />
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
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
            date(formatString: "DD MMM YYYY")
            tags
            featuredImage {
              childImageSharp{
                fluid(maxWidth: 1000, quality: 90){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 250)
          timeToRead
        }
      }
    }
  }
`;
