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
        className="text-xs border-solid border-4 border-black rounded p-1 mb-1 text-white bg-black"
        trigger={(
          <WhatsappShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <WhatsappIcon size={25} round />
          </WhatsappShareButton>
)}
        content="Share on Whatsapp"
      />

      <Popup
        position="top left"
        className="text-xs border-solid border-4 border-black rounded p-1 mb-1 text-white bg-black"
        trigger={(
          <LinkedinShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <LinkedinIcon size={25} round />
          </LinkedinShareButton>
)}
        content="Share on LinkedIn"
      />

      <Popup
        position="top left"
        className="text-xs border-solid border-4 border-black rounded p-1 mb-1 text-white bg-black"
        trigger={(
          <RedditShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <RedditIcon size={25} round />
          </RedditShareButton>
)}
        content="Share on Reddit"
      />

      <Popup
        position="top left"
        className="text-xs border-solid border-4 border-black rounded p-1 mb-1 text-white bg-black"
        trigger={(
          <TwitterShareButton className="mx-1" title={shareTitle} url={pageUrl}>
            <TwitterIcon size={25} round />
          </TwitterShareButton>
)}
        content="Share on Twitter"
      />

      <Popup
        position="top left"
        className="text-xs border-solid border-4 border-black rounded p-1 mb-1 text-white bg-black"
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
