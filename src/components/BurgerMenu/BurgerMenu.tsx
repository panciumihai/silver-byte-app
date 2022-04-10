import { FC, useState } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BasicProps, navLinkType } from '../../types';
import NavigationLink from '../NavigationLink/NavigationLink';
import styles from './BurgerMenu.module.scss';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import useMountTransition from '../../hooks/useMountTransition';

interface BurgerMenuProps extends BasicProps {
  links: navLinkType[];
}

const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  const { links } = props;

  const [isVisible, setIsVisible] = useState(false);
  const hasTransitionedIn = useMountTransition(isVisible, 400);

  const getMenu = () => {
    return ReactDOM.createPortal(
      <div className={classNames(styles.menuContainer, { [styles.visible]: isVisible && hasTransitionedIn })}>
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
      {(hasTransitionedIn || isVisible) && (
        <>
          <ModalBackdrop isVisible={isVisible && hasTransitionedIn} onClick={() => setIsVisible(false)} />
          {getMenu()}
        </>
      )}
    </>
  );
};

export default BurgerMenu;
