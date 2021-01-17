import React, { MouseEvent, forwardRef } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import HashTags from '@components/HashTags/HashTags';
import config from '@config/site-config.json';
import withRipple from '@components/WithRipple/withRipple';

export interface Props{
    title:string
    date:string
    timeToRead:number
    excerpt:string
    createRipple: Function
    path?:string
    slug?:string
    tags?:string
  image?: string
    setRef?:any
}

function Post({
  path, slug, title, date, timeToRead, excerpt, tags, image, setRef,
}: Props) {
 
  return (
    <div className="mt-12 w-full md:w-2/5 relative bg-white rounded-t-lg" role="button" tabIndex={0}>
      <Link to={`${path || `/${slug}`}`} className="text-lg font-medium" style={{ color: config.color.primary_color }} ref={setRef}>
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
          <figcaption className="pt-8 pl-4 pr-4 border-2 border-gray-400 border-opacity-100 pb-12">
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

// export default Post;
const PostWithForwardRef = forwardRef((props: Props, ref) => <Post setRef={ref} {...props} />);

const PostWithRipple = withRipple(PostWithForwardRef);

export default PostWithRipple;
