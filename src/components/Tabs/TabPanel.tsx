import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';

import styles from './TabPanel.module.scss';

interface TabPanelProps extends BasicProps {}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { className, children } = props;
  return <div className={classNames(styles.panelContainer, className)}>{children}</div>;
};

export default TabPanel;
