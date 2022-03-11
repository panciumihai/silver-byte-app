import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import { StringLiteralLike } from 'typescript';
import { BasicProps } from '../../types';

import styles from './Input.module.scss';

interface InputProps extends BasicProps {
  value: string;
  type?: string;
  onChange: (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => void;
  placeHolder: string;
  isTextarea?: boolean;
}

const Input: FC<InputProps> = (props) => {
  const { className, value, type, placeHolder, onChange, isTextarea } = props;
  return (
    <>
      {!isTextarea && (
        <input
          className={classNames(styles.input, className)}
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      )}
      {isTextarea && (
        <textarea
          className={classNames(styles.input, styles.textarea, className)}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      )}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  isTextarea: false,
};

export default Input;
