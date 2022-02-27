import { FC } from 'react';
import { TECH_CARDS_MOCK } from '../../utils/constants';
import Card from '../Card/Card';
import Wrapper from '../Wrapper/Wrapper';

import styles from './TechnologiesSection.module.scss';
interface TechnologiesSectionProps {}

const TechnologiesSection: FC<TechnologiesSectionProps> = (props) => {
  const {} = props;

  const getTechCards = () =>
    TECH_CARDS_MOCK.map((tc, index) => (
      <Card key={index} className={styles.card}>
        <div className={styles.iconContainer}>{tc.icon}</div>
        <h3>{tc.title}</h3>
        <p>{tc.description}</p>
      </Card>
    ));
  return (
    <Wrapper className={styles.wrapper} component="section">
      <div className={styles.header}>
        <h1>What We Use</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>
      <div className={styles.techsContainer}>{getTechCards()}</div>
    </Wrapper>
  );
};

export default TechnologiesSection;
