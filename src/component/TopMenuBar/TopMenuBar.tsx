import React from 'react';
import {Link} from 'gatsby';
import profilePic from '@/images/profile.jpg';
import siteConfig from '@config/site-config.json';
import withRipple from '@components/WithRipple/withRipple';
import leftImage from './left-arrow.svg';

const BackButton = withRipple(
  React.forwardRef((props, ref) => (
    <span
      tabIndex={0}
      className="inline-block p-2"
      ref={ref}
      {...props}
      onClick={() => {
        window.history.back();
      }}>
      <img className="" src={leftImage} alt="go back" width={25} />
    </span>
  )),
);

// export default function TopMenuBar(): JSX.Element {
//   return (
//     <Link to="/" className="no-underline">
//       <div
//         className="flex justify-start p-4 select-none"
//         style={{maxWidth: 1400, margin: '0px auto'}}>
//         <img
//           src={profilePic}
//           alt={siteConfig['index-page'].pic_alt}
//           className=" sm:h-12 md:h-12 h-24 rounded-full m-auto md:m-0 md:mr-4 block"
//         />
//         <span className="justify-center text-2xl no-underline text-grey-900 hidden md:flex md:flex-col">
//           {siteConfig['index-page'].title}
//         </span>
//       </div>
//     </Link>
//   );
// }

export default function TopMenuBar(): JSX.Element {
  return (
    <header className="sticky top-0 shadow px-3 py-2 bg-white flex flex-row">
      <BackButton />
    </header>
  );
}
