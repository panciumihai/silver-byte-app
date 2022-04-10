import classNames from 'classnames';
import { FC } from 'react';
import { BasicProps } from '../../types';
import Wrapper from '../Wrapper/Wrapper';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

import SilverByteLogo from '../../assets/images/logo.png';

import styles from './Footer.module.scss';

interface FooterProps extends BasicProps {}

const Footer: FC<FooterProps> = (props) => {
  const { className } = props;
  return (
    <Wrapper className={classNames(styles.wrapper, className)} component="footer">
      <a className={styles.logoContainer} href="/">
        <img src={SilverByteLogo} alt="Silver Byte Logo" />
      </a>
      <div className={styles.socialContainer}>
        <a
          className={styles.socialButton}
          target={'_blank'}
          href={'https://www.linkedin.com/in/mihai-panciu-rusu/'}
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          style={{ paddingRight: '5px' }}
          className={styles.socialButton}
          target={'_blank'}
          href={'https://t.me/mihaipanciu'}
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </a>
      </div>
      <p className={styles.label}>Copyright © 2022 SilverByte. All Rights Reserved.</p>
    </Wrapper>
  );
};

export default Footer;
