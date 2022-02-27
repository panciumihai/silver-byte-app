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
    to: '/',
  },
  {
    label: 'Services',
    to: '/services',
  },
];

export const SERVICES_CARDS_MOCK = [
  {
    icon: <FiLayout stroke-width="1" />,
    title: 'FrontEnd development',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiSmartphone stroke-width="1" />,
    title: 'Responsive layout',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiSearch stroke-width="1" />,
    title: 'Great SEO score',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <FiCpu stroke-width="1" />,
    title: 'Performance',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];

export const TECH_CARDS_MOCK = [
  {
    icon: <ReactIcon />,
    title: 'React',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <ReduxIcon />,
    title: 'Redux',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <NextIcon />,
    title: 'Next.JS',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <TypeScriptIcon />,
    title: 'TypeScript',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: <SassIcon />,
    title: 'Sass',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  // {
  //   icon: <ReactIcon />,
  //   title: 'React',
  //   description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  // },
];
