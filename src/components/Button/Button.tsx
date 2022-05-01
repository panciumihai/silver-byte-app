import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './Button.module.scss';
interface ButtonProps extends BasicProps {
  onClick?: () => void;
  type?: 'submit' | 'button';
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
  variant?: 'default' | 'outline';
  size?: 'medium' | 'small';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, fullWidth, color, variant, size, type, disabled } = props;

  const onClickHandler = () => {
    if (!!disabled && !!onClick) {
      onClick();
    }
  };

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
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
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
  type: 'button',
  disabled: false,
};

export default Button;
