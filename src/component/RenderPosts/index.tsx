import React from 'react';
import Post from '@components/Post/Post';

interface Props {
  data: Array<any>;
}

export default function RenderPosts({ data }: Props): JSX.Element {
  return (
    <>
      {data.map(
        ({
          node: {
            excerpt,
            timeToRead,
            frontmatter: {
              title,
              path,
              slug,
              date,
              tags: t,
              featuredImage: {
                childImageSharp: { fluid: image },
              },
            },
          },
        }) => (
          <Post
            path={path}
            slug={slug}
            title={title}
            date={date}
            timeToRead={timeToRead}
            excerpt={excerpt}
            tags={t}
            image={image}
            key={slug || path || title}
          />
        ),
      )}
    </>
  );
}
