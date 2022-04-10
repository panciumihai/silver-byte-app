import { FC } from 'react';
import { BasicProps } from '../../types';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
import { scroller } from 'react-scroll';

import styles from './Hero.module.scss';
import ParticlesAnimation from './Particles';
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface HeroProps extends BasicProps {}

const Hero: FC<HeroProps> = (props) => {
  const {} = props;

  const contactUsHandler = () => {
    scroller.scrollTo('#contact', {
      offset: -80,
      delay: 0,
    });
  };

  return (
    <Wrapper className={styles.wrapper} component="section" id="#home">
      <ParticlesAnimation />
      <div className={styles.container}>
        <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn">
          <h1>MAKE YOUR WEBSITE COME ALIVE</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <p>We provide smart solutions to get your ideas done. Tell us about them and let's get to work.</p>
        </AnimationOnScroll>
        <Button className={styles.button} fullWidth={false} variant="outline" onClick={contactUsHandler}>
          CONTACT US
        </Button>
      </div>
    </Wrapper>
  );
};

export default Hero;
