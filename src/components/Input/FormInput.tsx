import React, { FC, FormEvent, Ref } from 'react';
import { BasicProps } from '../../types';

import styles from './Input.module.scss';
import classNames from 'classnames';

interface FormInputProps extends BasicProps {
  value?: string;
  name?: string;
  type?: string;
  onChange?: (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => void;
  placeHolder?: string;
  isTextarea?: boolean;
  error?: string;
}

const FormInput = (props: FormInputProps, ref: Ref<HTMLInputElement>) => {
  const { className, value, type, name, error, placeHolder, onChange, onBlur } = props;

  return (
    <div className={classNames(styles.container, className)}>
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
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default React.forwardRef(FormInput);
