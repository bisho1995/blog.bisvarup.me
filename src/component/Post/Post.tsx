import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import HashTags from '@components/HashTags/HashTags';
import config from '@config/site-config.json';

export interface Props{
    title:string
    date:string
    timeToRead:number
    excerpt:string
    path?:string
    slug?:string
    tags?:string
    image?:string
}

export default function ({
  path, slug, title, date, timeToRead, excerpt, tags, image,
}:Props) {
  return (
    <div className="pl-4 pr-4 my-12 w-full md:w-2/5 relative">
      <Link to={`${path || `/${slug}`}`} className="text-lg font-medium" style={{ color: config.color.primary_color }}>
        <div
          className="p-1 absolute bg-gray-900 text-white rounded z-10"
          style={{
            top: 10, left: 10,
          }}
        >
          {date}
        </div>
        <figure>
          <Img fluid={image} alt={title} className="rounded block shadow-xl" />
          <figcaption className="mt-8">
            <div className="flex justify-between mb-4">
              <HashTags tags={tags} />
              <div className="text-xs text-gray-600 text-right" style={{ minWidth: 85 }}>
                {timeToRead}
                {' '}
                min read ⏱
              </div>
            </div>

            {title}
            <p className="text-gray-700 text-sm">{excerpt}</p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}
