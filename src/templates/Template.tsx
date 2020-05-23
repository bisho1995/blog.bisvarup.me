import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';

export default withErrorBoundary(({
  pageContext: { content, date },
}: {
  pageContext: {content: string},
}) => (
  <div>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
    </Helmet>
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div
          style={{
            padding: 32, display: 'flex', justifyContent: 'flex-start', userSelect: 'none',
          }}
        >
          <img
            style={{ borderRadius: '50%', marginRight: 12 }}
            src={profilePic}
            alt="bisvarup mukherjee"
            height={60}
          />
          <b
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontSize: 20,
              color: '#212121',
            }}
          >
            bisvarup&apos;s blog
          </b>
        </div>
      </Link>
    </header>
    <div className="container">
      <div style={{ textAlign: 'center' }}><b>{date}</b></div>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div style={{ marginTop: 64, display: 'flex' }}>
        <img
          style={{ borderRadius: '50%', marginRight: 32 }}
          src={profilePic}
          alt="bisvarup mukherjee"
          height={100}
        />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          Hi, I am bisvarup. I am a frontend developer at Flipkart. I love optimizations which included bundling and website perf. Hit me up if you want to talk about typescript, react, and general frontend concepts, or if you have any opinion about this post.
        </div>
      </div>
    </div>
    {/* <footer>
      Newsletter
      Social media
    </footer> */}
  </div>
));
