import React, { FC, FormEvent, Ref } from 'react';
import classNames from 'classnames';
import { BasicProps } from '../../types';

import styles from './Input.module.scss';

interface InputProps extends BasicProps {
  value: string;
  name?: string;
  type?: string;
  onChange: (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => void;
  placeHolder?: string;
  isTextarea?: boolean;
  error?: string;
}

const Input: FC<InputProps> = React.forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement & HTMLTextAreaElement>) => {
    const { className, value, type = 'text', name, error, placeHolder, onChange, onBlur, isTextarea = false } = props;

    return (
      <div className={classNames(styles.container, className)}>
        {!isTextarea && (
          <input
            className={classNames(styles.input, { [styles.error]: error! })}
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            ref={ref}
          />
        )}
        {isTextarea && (
          <textarea
            className={classNames(styles.input, styles.textarea, { [styles.error]: error! }, className)}
            placeholder={placeHolder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            ref={ref}
          />
        )}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  },
);

Input.defaultProps = {
  type: 'text',
  isTextarea: false,
};

export default Input;
