import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './Tab.module.scss';

interface TabProps extends BasicProps {
  onClick: () => void;

  isSelected?: boolean;
}

const Tab: FC<TabProps> = (props) => {
  const { className, children, onClick, isSelected } = props;
  return (
    <button
      className={classNames(styles.tab, { [styles.active]: isSelected }, className)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Tab.defaultProps = {
  isSelected: false,
};

export default Tab;
