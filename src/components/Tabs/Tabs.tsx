import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';
import Tab from './Tab';

import styles from './Tabs.module.scss';

interface TabsProps extends BasicProps {
  labels: string[];
  value: string;
  onChange: (tab: string) => void;
}

const Tabs: FC<TabsProps> = (props) => {
  const { className, labels, onChange, value } = props;

  return (
    <div className={classNames(styles.tabs, className)}>
      {labels.map((label) => (
        <Tab className={styles.tab} key={label} onClick={() => onChange(label)} isSelected={value === label}>
          {label}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
