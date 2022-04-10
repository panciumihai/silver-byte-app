import classNames from 'classnames';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import useMountTransition from '../../hooks/useMountTransition';
import { BasicProps } from '../../types';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

import styles from './Modal.module.scss';

interface ModalProps extends BasicProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { className, children, isVisible, onClose } = props;

  const hasTransitionedIn = useMountTransition(isVisible, 400);

  return (
    <>
      {(isVisible || hasTransitionedIn) && (
        <>
          <ModalBackdrop isVisible={isVisible && hasTransitionedIn} onClick={onClose} />
          {ReactDOM.createPortal(
            <div
              className={classNames(styles.content, { [styles.visible]: isVisible && hasTransitionedIn }, className)}
              onClick={onClose}
            >
              {children}
            </div>,
            document.getElementById('overlay-root') as HTMLElement,
          )}
        </>
      )}
    </>
  );
};

export default Modal;
