import React from 'react';
import { Link } from 'gatsby';
import Helmet from '../component/Helmet/Helmet';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';

export default withErrorBoundary(
  ({ pageContext: { content, date } }: {pageContext: {content: string}}) => (
    <div>
      <Helmet />
      <header>
        <Link to="/" className="no-underline">
          <div className="flex justify-start p-4 select-none">
            <img
              src={profilePic}
              alt="bisvarup mukherjee"
              className="h-24 mr-6 rounded-full"
            />
            <span className="flex flex-col justify-center text-2xl no-underline text-grey-900">
              bisvarup&apos;s blog
            </span>
          </div>
        </Link>
      </header>
      <div className="container mx-auto p-4">
        <div className="text-center">
          <b>{date}</b>
        </div>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex mt-16">
          <img
            src={profilePic}
            alt="bisvarup mukherjee"
            className="h-32 mr-6 rounded-full"
          />
          <div
            className="flex flex-col justify-center text-sm"
          >
            Hi, I am bisvarup. I am a frontend developer at Flipkart. I love
            optimizations which included bundling and website perf. Hit me up if
            you want to talk about typescript, react, and general frontend
            concepts, or if you have any opinion about this post.
          </div>
        </div>
      </div>
      {/* <footer>
      Newsletter
      Social media
    </footer> */}
    </div>
  ),
);
