import { navLinkType } from '../types';
import { FiLayout, FiSmartphone, FiSearch, FiCpu } from 'react-icons/fi';

import { ReactComponent as ReactIcon } from '../assets/svgs/technologies/react.svg';
import { ReactComponent as ReduxIcon } from '../assets/svgs/technologies/redux.svg';
import { ReactComponent as NextIcon } from '../assets/svgs/technologies/nextjs.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/svgs/technologies/typescript.svg';
import { ReactComponent as SassIcon } from '../assets/svgs/technologies/sass.svg';

export const NAV_LINKS: navLinkType[] = [
  {
    label: 'Home',
    to: '#home',
  },
  {
    label: 'Services',
    to: '#services',
  },
  {
    label: 'Technologies',
    to: '#technologies',
  },
  {
    label: 'Portfolio',
    to: '#portfolio',
  },
  {
    label: 'Testimonials',
    to: '#testimonials',
  },
  {
    label: 'About Us',
    to: '#aboutUs',
  },
  {
    label: 'Contact',
    to: '#contact',
  },
];

export const SERVICES_CARDS_MOCK = [
  {
    icon: <FiLayout strokeWidth="1" />,
    title: 'Front End development',
    description: 'Implement user interfaces from a provided design from Figma, Photoshop, Miro',
  },
  {
    icon: <FiSmartphone strokeWidth="1" />,
    title: '100% Responsive layout',
    description:
      'Depending on the projects needs. We pay close attention to make your website look good on any screen resolutions (Mobile, Tablet, Desktop).',
  },
  {
    icon: <FiSearch strokeWidth="1" />,
    title: 'Great SEO score',
    description: 'Make you visible on search engines is one of our priority. Everybody needs to find you easy.',
  },
  {
    icon: <FiCpu strokeWidth="1" />,
    title: 'Performance',
    description: 'Clean code, scalable architecture and using latest technologies are the keys for a good performance.',
  },
];

export const TECH_CARDS_MOCK = [
  {
    icon: <ReactIcon />,
    title: 'React',
    description: 'Over 3 years of experience using this library.',
  },
  {
    icon: <ReduxIcon />,
    title: 'Redux',
    description: 'Solid knowledge about state management. Experience with Thunk and Saga approach.',
  },
  {
    icon: <NextIcon />,
    title: 'Next.JS',
    description: 'Server side rendering for even better SEO and performance.',
  },
  {
    icon: <TypeScriptIcon />,
    title: 'TypeScript',
    description: 'Better code maintainability and avoid common JS problems.',
  },
  {
    icon: <SassIcon />,
    title: 'Sass',
    description: 'Enhanced version of the CSS. It helps us to implement your design faster.',
  },
  // {
  //   icon: <ReactIcon />,
  //   title: 'React',
  //   description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  // },
];
