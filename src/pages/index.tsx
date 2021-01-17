import React from 'react';
import {graphql, Link} from 'gatsby';
import RenderPosts from '@components/RenderPosts/index';
import withErrorBoundary from '@components/withErrorBoundary/withErrorBoundary';
import profilePic from '@/images/profile.jpg';
import Helmet from '@components/Helmet/Helmet';
import CircularDot from '@components/CircularDot/CircularDot';
import Footer from '@components/Footer/Footer';
import siteConfig from '@config/site-config.json';

const Header = ({tags}) => (
  <header className="flex-row justify-center md:m-16 sm:block md:flex text-center">
    <img
      src={profilePic}
      alt={siteConfig['index-page'].pic_alt}
      height={130}
      className="h-32 m-auto md:mr-4 md:ml-0 rounded-full"
    />
    <div className="m-0">
      <h1 className="text-3xl text-white flex flex-col justify-center mb-0">
        {siteConfig['index-page'].title}
      </h1>
      <h2 className="text-gray-400">{tags}</h2>
      <div className="text-blue-400">
        <Link to="/about">About</Link> &#8231;{' '}
        <Link
          to="https://github.com/bisho1995/blog.bisvarup.me/"
          target="_blank">
          GitHub
        </Link>
      </div>
    </div>
  </header>
);

export default withErrorBoundary(({data}) => {
  const edges = data?.allMarkdownRemark?.edges;

  const tags: Array<string | JSX.Element> = [];
  for (let i = 0; i < siteConfig['index-page'].tags.length; i += 1) {
    if (i === 0) tags.push(siteConfig['index-page'].tags[i]);
    else {
      tags.push(
        <CircularDot top={-3} key={siteConfig['index-page'].tags[i]} />,
        siteConfig['index-page'].tags[i],
      );
    }
  }

  return (
    <>
      <div
        className="bg-purple-800 "
        style={{
          position: 'absolute',
          left: 0,
          width: '100vw',
          height: '50vh',
        }}
      />
      <article
        style={{
          position: 'absolute',
          zIndex: 1,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: 1200,
        }}>
        <main className="p-4 container mx-auto">
          <Helmet />
          <Header tags={tags} />
          <div className="text-left">
            <div className="leading-normal flex flex-wrap justify-around">
              <RenderPosts data={edges} />
            </div>
          </div>
        </main>
        <Footer />
      </article>
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
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
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
