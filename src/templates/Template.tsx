import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet as ReactHelmet } from 'react-helmet';
import Disqus from 'disqus-react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import Img from 'gatsby-image';
import { Popup } from 'semantic-ui-react';
import Helmet from '../component/Helmet/Helmet';
import withErrorBoundary from '../component/withErrorBoundary/withErrorBoundary';
import profilePic from '../images/profile.jpg';
import styles from './template.module.scss';
import AsideBlock from '../component/AsideBlock/AsideBlock';
import Footer from '../component/Footer/Footer';
import HashTags from '../component/HashTags/HashTags';
import config from '../config/config';

import siteConfig from '../../config/site-config.json';

interface Props {
  pageContext: {
    content: string,
    date: string,
    title:string,
    slug:string,
    url:string,
    newPosts?:Object[]
    image?:string
    tags?:string | string[]
  }
  data?:any
}

export default withErrorBoundary(
  ({
    pageContext: {
      content, date, title, slug, newPosts = [], image = '', tags = '', url,
    },
    data = {},
  }: Props) => {
    const pageUrl = `${config.base_path}${url}`;
    const disqusShortname = siteConfig.disqus.short_name;
    const disqusConfig = {
      url: pageUrl,
      identifier: encodeURIComponent(slug),
      title,
    };
    const shareTitle = `Checkout ${title} on`;

    const sources = data.file?.childImageSharp?.fluid;

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
                alt={siteConfig['index-page'].pic_alt}
                className="h-24 rounded-full m-auto md:m-0 md:mr-4 block"
              />
              <span className="justify-center text-2xl no-underline text-grey-900 hidden md:flex md:flex-col">
                {siteConfig['index-page'].title}
              </span>
            </div>
          </Link>
        </header>
        <div className={`flex flex-col ${styles.wrapper} mx-auto lg:flex-row`}>
          <div className={`${styles.template} container mx-auto p-4`}>
            <h1 className="text-center text-2xl md:text-3xl">{title}</h1>
            <div className="flex justify-between mt-8 mb-4">
              <div className="hidden md:block text-sm font-normal text-gray-900">{date}</div>
              <div className="flex">
                <Popup
                  position="top left"
                  style={{
                    border: '1px solid black', background: 'black', color: '#fff', marginBottom: 4, padding: 8,
                  }}
                  trigger={(
                    <WhatsappShareButton className="mx-1" title={shareTitle} url={pageUrl}>
                      <WhatsappIcon size={25} round />
                    </WhatsappShareButton>
)}
                  content="Share on whatsapp"
                />

                <LinkedinShareButton className="mx-1" title={shareTitle} url={pageUrl}>
                  <LinkedinIcon size={25} round />
                </LinkedinShareButton>
                <RedditShareButton className="mx-1" title={shareTitle} url={pageUrl}>
                  <RedditIcon size={25} round />
                </RedditShareButton>

                <TwitterShareButton className="mx-1" title={shareTitle} url={pageUrl}>
                  <TwitterIcon size={25} round />
                </TwitterShareButton>
                <FacebookShareButton className="mx-1" title={shareTitle} url={pageUrl}>
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
              </div>
            </div>
            {image && <figure><Img fluid={sources} alt={title} className="my-4" /></figure>}
            <div
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="text-center my-4 text-gray-600">-- X -- X -- X --</div>

            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
          <aside className="w-full md:w-auto m-4 lg:mr-4 flex flex-col">
            <AsideBlock header="Latest Posts">
              <div>
                {newPosts.filter(({ title: pageTitle }) => pageTitle !== title).map(({
                  title: pageTitle, path, slug: s, image: i = '/images/placeholder.jpg', tags: t = '',
                }) => (
                  <Link to={path || `/${s}`}>
                    <div className="mb-8 text-sm leading-normal font-medium flex">
                      <img className="w-20 h-20 mr-4" width="80" height="80" style={{ width: 80, height: 80 }} src={i || '/images/placeholder.jpg'} alt={pageTitle} />
                      <div>
                        {pageTitle}
                        <div><HashTags tags={t} /></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AsideBlock>
            {/* <AsideBlock header="Tags">
              <div>
                All our tags
              </div>
            </AsideBlock> */}
          </aside>
        </div>
        <Footer />
      </div>
    );
  },
);

export const query = graphql`
query ImageQuery($image: String) {
  file(relativePath: {eq: $image}) {
    childImageSharp{
      fluid(maxWidth: 1000, quality: 90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}    
`;
