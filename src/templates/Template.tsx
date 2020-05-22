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
    <div style={{ textAlign: 'center' }}><b>{date}</b></div>
    <div
      className="container"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    ;
  </div>
));
