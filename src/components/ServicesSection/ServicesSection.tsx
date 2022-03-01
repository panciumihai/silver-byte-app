import { FC } from 'react';
import { SERVICES_CARDS_MOCK } from '../../utils/constants';
import Card from '../Card/Card';
import Wrapper from '../Wrapper/Wrapper';

import styles from './ServicesSection.module.scss';
interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const {} = props;

  const getServicesCards = () =>
    SERVICES_CARDS_MOCK.map((sc, index) => (
      <Card key={index} className={styles.card}>
        <div className={styles.iconContainer}>{sc.icon}</div>
        <h3>{sc.title}</h3>
        <p>{sc.description}</p>
      </Card>
    ));
  return (
    <Wrapper className={styles.wrapper} component="section">
      <div className={styles.header}>
        <h1>Our services</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.servicesContainer}>{getServicesCards()}</div>
    </Wrapper>
  );
};

export default ServicesSection;
