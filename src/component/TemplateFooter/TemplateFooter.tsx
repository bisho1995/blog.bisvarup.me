import React from 'react';
import profilePic from '../../images/profile.jpg';

export default function TemplateFooter() {
  return (
    <div className="flex mt-1 container mx-auto p-2">
      <img
        src={profilePic}
        alt="bisvarup mukherjee"
        className="h-32 mr-4 md:mr-6 rounded-full"
      />
      <div className="flex flex-col justify-center text-sm">
        Hi, I am bisvarup. I am a frontend developer at Flipkart. I love
        optimizations which included bundling and website perf. Hit me up if you
        want to talk about typescript, react, and general frontend concepts, or
        if you have any opinion about this post.
      </div>
    </div>
  );
}
