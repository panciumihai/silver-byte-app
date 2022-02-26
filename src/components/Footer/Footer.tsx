import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';
import Wrapper from '../Wrapper/Wrapper';

import SilverByteLogo from '../../assets/images/logo.png';

import styles from './Footer.module.scss';

interface FooterProps extends BasicProps {}

const Footer: FC<FooterProps> = (props) => {
  const { className } = props;
  return (
    <Wrapper className={classNames(styles.wrapper, className)}>
      <a className={styles.logoContainer} href="/">
        <img src={SilverByteLogo} alt="Silver Byte Logo" />
      </a>
      <p className={styles.label}>Copyright © 2022 SilverByte. All Rights Reserved.</p>
    </Wrapper>
  );
};

export default Footer;
