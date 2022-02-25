import { FC, useState } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BasicProps, navLinkType } from '../../types';
import NavigationLink from '../NavigationLink/NavigationLink';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps extends BasicProps {
  links: navLinkType[];
}

const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  const { links } = props;

  const [isVisible, setIsVisible] = useState(false);

  const getBackdrop = () => {
    return ReactDOM.createPortal(
      <div
        className={classNames(styles.backdrop, { [styles.visible]: isVisible })}
        onClick={() => setIsVisible(false)}
      ></div>,
      document.getElementById('backdrop-root') as HTMLElement,
    );
  };

  const getMenu = () => {
    return ReactDOM.createPortal(
      <div className={classNames(styles.menuContainer, { [styles.visible]: isVisible })}>
        <div className={styles.header}>
          <div className={styles.closeContainer} onClick={() => setIsVisible(false)}>
            <FiX />
          </div>
        </div>
        {links.map((item) => (
          <NavigationLink key={item.to} to={item.to}>
            {item.label}
          </NavigationLink>
        ))}
      </div>,
      document.getElementById('overlay-root') as HTMLElement,
    );
  };

  return (
    <>
      <div className={styles.burgerButton} onClick={() => setIsVisible(true)}>
        <FiMenu />
      </div>
      {getBackdrop()}
      {getMenu()}
    </>
  );
};

export default BurgerMenu;
