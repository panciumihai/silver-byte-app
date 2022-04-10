import { FC } from 'react';
import { BasicProps, navLinkType } from '../../types';
import NavigationLink from '../NavigationLink/NavigationLink';

import styles from './AppNavigation.module.scss';

interface AppNavigationProps extends BasicProps {
  links: navLinkType[];
}

const AppNavigation: FC<AppNavigationProps> = (props) => {
  const { className, links } = props;

  const getNavLinks = () =>
    links.map((nl) => (
      <NavigationLink key={nl.label} className={styles.navLink} to={nl.to}>
        {nl.label}
      </NavigationLink>
    ));

  return <nav>{getNavLinks()}</nav>;
};

export default AppNavigation;
