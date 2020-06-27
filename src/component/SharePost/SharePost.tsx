import React from 'react';
import { Popup } from 'semantic-ui-react';
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

interface Props {
    shareTitle:string,
    pageUrl:string
}

export default function SharePost({ shareTitle, pageUrl }:Props) {
  return (
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
        content="Share on Whatsapp"
      />

      <Popup
        position="top left"
        style={{
          border: '1px solid black', background: 'black', color: '#fff', marginBottom: 4, padding: 8,
        }}
        trigger={(
          <LinkedinShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <LinkedinIcon size={25} round />
          </LinkedinShareButton>
)}
        content="Share on LinkedIn"
      />

      <Popup
        position="top left"
        style={{
          border: '1px solid black', background: 'black', color: '#fff', marginBottom: 4, padding: 8,
        }}
        trigger={(
          <RedditShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <RedditIcon size={25} round />
          </RedditShareButton>
)}
        content="Share on Reddit"
      />

      <Popup
        position="top left"
        style={{
          border: '1px solid black', background: 'black', color: '#fff', marginBottom: 4, padding: 8,
        }}
        trigger={(
          <TwitterShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <TwitterIcon size={25} round />
          </TwitterShareButton>
)}
        content="Share on Twitter"
      />

      <Popup
        position="top left"
        style={{
          border: '1px solid black', background: 'black', color: '#fff', marginBottom: 4, padding: 8,
        }}
        trigger={(
          <FacebookShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <FacebookIcon size={25} round />
          </FacebookShareButton>
)}
        content="Share on Facebook"
      />

    </div>
  );
}
