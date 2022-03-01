import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';
import Wrapper from '../Wrapper/Wrapper';

import styles from './Section.module.scss';

interface SectionProps extends BasicProps {
  title: string;
  description: string;
  contentClassName: string;
}

const Section: FC<SectionProps> = (props) => {
  const { className, contentClassName, children, title, description } = props;
  return (
    <Wrapper className={classNames(styles.wrapper, className)} component="section">
      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={classNames(styles.content, contentClassName)}>{children}</div>
    </Wrapper>
  );
};

export default Section;
