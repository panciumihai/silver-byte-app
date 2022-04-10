import { FC } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SERVICES_CARDS_MOCK } from '../../utils/constants';
import Card from '../Card/Card';
import Wrapper from '../Wrapper/Wrapper';

import styles from './ServicesSection.module.scss';
interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const getServicesCards = () =>
    SERVICES_CARDS_MOCK.map((sc, index) => (
      <AnimationOnScroll key={index} animateOnce={true} animateIn="animate__flipInX" delay={150 * index}>
        <Card className={styles.card}>
          <div className={styles.iconContainer}>{sc.icon}</div>
          <h3>{sc.title}</h3>
          <p>{sc.description}</p>
        </Card>
      </AnimationOnScroll>
    ));
  return (
    <Wrapper className={styles.wrapper} component="section" id="#services">
      <div className={styles.header}>
        <h1>Our services</h1>
        <p>
          We provide Front End development services for a wide range of projects. Starting from a simple presentation
          website to a business website, web3 UI and even more complex applications.
        </p>
      </div>
      <div className={styles.servicesContainer}>{getServicesCards()}</div>
    </Wrapper>
  );
};

export default ServicesSection;
