import React from 'react';
import { Link } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';
import Helmet from '../component/Helmet/Helmet';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import Newsletter from '../component/newsletter/Newsletter';
import './template.scss';

function Template({ pageContext: { content, date, title } }: {pageContext: {content: string, date: string, title:string}}) {
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Helmet />
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      <header>
        <Link to="/" className="no-underline">
          <div className="flex justify-start p-4 select-none">
            <img
              src={profilePic}
              alt="bisvarup mukherjee"
              className="h-24 rounded-full m-auto md:m-0 md:mr-4 block"
            />
            <span className="justify-center text-2xl no-underline text-grey-900 hidden md:flex md:flex-col">
              bisvarup&apos;s blog
            </span>
          </div>
        </Link>
      </header>
      <div className="template container mx-auto p-4">
        <div className="text-center">
          <b>{date}</b>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="text-center my-4 text-gray-600">-- X -- X -- X --</div>
      </div>
      <Newsletter onSubmit={onSubmit} />
      <div className="flex mt-1 container mx-auto p-2">

        <img
          src={profilePic}
          alt="bisvarup mukherjee"
          className="h-32 mr-4 md:mr-6 rounded-full"
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
      {/* <footer>
        Newsletter
        Social media
      </footer> */}
    </div>
  );
}

export default withErrorBoundary(Template);
