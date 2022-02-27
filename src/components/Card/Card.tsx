import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './Card.module.scss';
interface CardProps extends BasicProps {}

const Card: FC<CardProps> = (props) => {
  const { className, children } = props;
  return <div className={classNames(styles.container, className)}>{children}</div>;
};

export default Card;
