import classNames from 'classnames';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import { BasicProps } from '../../types';

import styles from './ModalBackdrop.module.scss';

interface ModalBackdropProps extends BasicProps {
  isVisible: boolean;
  onClick?: () => void;
}

const ModalBackdrop: FC<ModalBackdropProps> = (props) => {
  const { className, isVisible, onClick } = props;
  return ReactDOM.createPortal(
    <div className={classNames(styles.backdrop, { [styles.visible]: isVisible }, className)} onClick={onClick}></div>,
    document.getElementById('backdrop-root') as HTMLElement,
  );
};

export default ModalBackdrop;
