import React from 'react';
import { Link } from 'gatsby';
import HashTags from "../HashTags/HashTags"

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
    <div className="my-12 w-full md:w-2/5 relative">
      <div
        className="p-1 absolute bg-gray-900 text-white rounded"
        style={{
          top: 10, left: 10,
        }}
      >
        {date}
      </div>
      <figure>
        <img loading="lazy" className="rounded block shadow-xl" src={image || '/images/placeholder.jpg'} alt={title} />
        <figcaption className="mt-8">
          <div className="flex justify-between mb-4">
          <HashTags tags={tags} className="text-purple-900 text-sm"/>
          <div className="text-xs text-gray-600">{timeToRead}{' '}
              min read ⏱</div>
          </div>
          <Link to={`/${path || slug}`} className="text-purple-900 text-lg font-medium">
            {title}
            <p className="text-gray-700 text-sm">{excerpt}</p>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
