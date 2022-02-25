import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './Button.module.scss';
interface ButtonProps extends BasicProps {
  onClick: () => void;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
  variant?: 'default' | 'outline';
  size?: 'medium' | 'small';
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, fullWidth, color, variant, size } = props;
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.fullWidth]: fullWidth,
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.default]: variant === 'default',
          [styles.outline]: variant === 'outline',
          [styles.medium]: size === 'medium',
          [styles.small]: size === 'small',
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  fullWidth: true,
  color: 'primary',
  variant: 'default',
  size: 'medium',
};

export default Button;
