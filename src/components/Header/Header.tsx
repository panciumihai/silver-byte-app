import { FC } from 'react';
import Wrapper from '../Wrapper/Wrapper';

import SilverByteLogo from '../../assets/images/logo.png';

import styles from './Header.module.scss';
import AppNavigation from '../AppNavigation/AppNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { NAV_LINKS } from '../../utils/constants';

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  return (
    <Wrapper className={styles.container} component="header">
      <a className={styles.logoContainer} href="/">
        <img src={SilverByteLogo} alt="Silver Byte Logo" />
      </a>
      <AppNavigation links={NAV_LINKS} />
      <BurgerMenu links={NAV_LINKS} />
    </Wrapper>
  );
};

export default Header;
