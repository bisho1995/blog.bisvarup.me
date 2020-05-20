import React from 'react';
import marked from 'marked';

export default function Template({
  pageContext: {content},
}: {
  pageContext: {content: string},
}) {
  return <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>;
}
