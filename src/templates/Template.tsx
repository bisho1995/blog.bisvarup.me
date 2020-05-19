import React from "react";
import { Helmet } from "react-helmet";

export default function Template({
  pageContext: { content },
}: {
  pageContext: { content: string };
}) {
  return (
    <div>
      <Helmet>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
        ></link>
      </Helmet>
      <div
        className='container'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      ;
    </div>
  );
}
