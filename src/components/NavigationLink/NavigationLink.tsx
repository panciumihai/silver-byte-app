import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { BasicProps } from '../../types';

import styles from './NavigationLink.module.scss';

interface NavigationLinkProps extends BasicProps {
  to: string;
  checkHash?: boolean;
}

const NavigationLink: FC<NavigationLinkProps> = (props) => {
  const { className, to, children } = props;

  const { hash } = useLocation();

  return (
    <Link
      className={classNames(styles.navLink, className)}
      activeClass={styles.active}
      to={to}
      hashSpy={true}
      offset={-80}
      spy={true}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
