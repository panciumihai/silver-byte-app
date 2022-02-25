import { FC } from 'react';
import { BasicProps } from '../../types';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

import styles from './Hero.module.scss';
import ParticlesAnimation from './Particles';

interface HeroProps extends BasicProps {}

const Hero: FC<HeroProps> = (props) => {
  const {} = props;

  return (
    <Wrapper className={styles.wrapper} component="section">
      <ParticlesAnimation />
      <div className={styles.container}>
        <h1>WEB DEVELOPMENT</h1>
        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
        <Button className={styles.button} variant="outline" onClick={() => null}>
          CONTACT US
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
