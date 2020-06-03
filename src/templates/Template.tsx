import React from 'react';
import { Link } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';
import Helmet from '../component/Helmet/Helmet';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import ViewCounter from '../component/ViewCounter/ViewCounter';
import styles from './template.module.scss';
import TemplateFooter from '../component/TemplateFooter/TemplateFooter';
import AsideBlock from '../component/AsideBlock/AsideBlock';
import Footer from '../component/Footer/Footer';

export default withErrorBoundary(
  ({ pageContext: { content, date, title } }: {pageContext: {content: string, date: string, title:string}}) => (
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
      <div className={`flex ${styles.wrapper} mx-auto`}>
        <div className={`${styles.template} container mr-16 p-4`}>
          <div className="text-center">
            <b>{date}</b>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="text-center my-4 text-gray-600">-- X -- X -- X --</div>
        </div>
        <aside className={`${styles.aside} flex flex-col`}>
          <AsideBlock header="Latest Posts">
            <div>
              Our latest posts
            </div>
          </AsideBlock>
          <AsideBlock header="Tags">
            <div>
              All our tags
            </div>
          </AsideBlock>
        </aside>
      </div>
      <Footer />
    </div>
  ),
);
