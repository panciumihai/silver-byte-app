import { FC, useCallback, useEffect, useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';

import SilverByteLogo from '../../assets/images/logo.png';

import styles from './Header.module.scss';
import AppNavigation from '../AppNavigation/AppNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { NAV_LINKS } from '../../utils/constants';
import classNames from 'classnames';
import { FaWindows } from 'react-icons/fa';

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const {} = props;
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const scrollWoker = useCallback(() => {
    setIsPageScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    console.log(window.scrollY);
    setIsPageScrolled(window.scrollY > 30);

    window.addEventListener('scroll', scrollWoker);

    return () => {
      window.removeEventListener('scroll', scrollWoker);
    };
  }, []);

  return (
    <Wrapper className={classNames(styles.container, { [styles.scrolled]: isPageScrolled })} component="header">
      <a className={styles.logoContainer} href="/">
        <img src={SilverByteLogo} alt="Silver Byte Logo" />
      </a>
      <AppNavigation links={NAV_LINKS} />
      <BurgerMenu links={NAV_LINKS} />
    </Wrapper>
  );
};

export default Header;
