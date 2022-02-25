import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { BasicProps } from '../../types';

import styles from './NavigationLink.module.scss';

interface NavigationLinkProps extends BasicProps {
  to: string;
}

const NavigationLink: FC<NavigationLinkProps> = (props) => {
  const { className, to, children } = props;
  return (
    <NavLink className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive }, className)} to={to}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
