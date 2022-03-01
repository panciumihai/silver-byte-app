import { FC } from 'react';
import Slider from 'react-slick';
import { BasicProps } from '../../types';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

import AlphaCapImage from '../../assets/images/portfolio/alpha-cap.png';
import AlphaPadImage from '../../assets/images/portfolio/alpha-pad.png';

import styles from './PortfolioSection.module.scss';
import Section from '../Section/Section';

export const slickDot = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const list = [
  {
    image: AlphaCapImage,
    category: 'Development',
    title: 'Alpha Capital',
  },
  {
    image: AlphaPadImage,
    category: 'Development',
    title: 'Alpha Pad',
  },
];
const description = 'These are our last projects. Our clients were very satisfied with the final result.';

interface PortfolioSectionProps extends BasicProps {}

const PortfolioSection: FC<PortfolioSectionProps> = (props) => {
  const {} = props;

  const getPortofolioCards = () =>
    list.map((l, index) => (
      <div key={index} className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={l.image} alt={`${l.title} image`}></img>
        </div>
        <div className={styles.body}>
          <h2>{l.title}</h2>
          <Button size="small" variant="outline" onClick={() => null}>
            Visit the website
          </Button>
        </div>
      </div>
    ));

  return (
    <Section title="Portfolio" description={description} contentClassName={''}>
      <Slider className={styles.slider} {...slickDot}>
        {getPortofolioCards()}
      </Slider>
    </Section>
  );
};

export default PortfolioSection;
