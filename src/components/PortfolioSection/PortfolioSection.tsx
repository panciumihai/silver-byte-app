import { FC, useState } from 'react';
import Slider from 'react-slick';
import { BasicProps } from '../../types';
import Button from '../Button/Button';

import AlphaCapImage from '../../assets/images/portfolio/alpha-cap.png';
import AlphaPadImage from '../../assets/images/portfolio/alpha-pad.png';
import RetroverseImage from '../../assets/images/portfolio/retroverse.png';

import styles from './PortfolioSection.module.scss';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import ReactPlayer from 'react-player';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const slickDot = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
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
    videoUrl: '/videos/alpha-cap-demo.mp4',
  },
  {
    image: AlphaPadImage,
    category: 'Development',
    title: 'Alpha Pad',
    videoUrl: '/videos/alpha-pad-demo.mp4',
  },
  {
    image: RetroverseImage,
    category: 'Development',
    title: 'Retroverse',
    videoUrl: '/videos/retroverse-demo.mp4',
  },
];
const description = 'These are our last projects. Our clients were very satisfied with the final result.';

interface PortfolioSectionProps extends BasicProps {}

const PortfolioSection: FC<PortfolioSectionProps> = (props) => {
  const {} = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProjectVideo, setSelectedProjectVideo] = useState('');

  const viewDemoHandler = (videoUrl: string) => {
    setSelectedProjectVideo(videoUrl);
    setIsModalVisible(true);
  };

  const getPortfolioCards = () =>
    list.map((l, index) => (
      <AnimationOnScroll key={index} animateOnce animateIn="animate__fadeIn" delay={150 * index}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={l.image} alt={`${l.title}`}></img>
          </div>
          <div className={styles.body}>
            <h2>{l.title}</h2>
            <Button size="small" variant="outline" fullWidth={false} onClick={() => viewDemoHandler(l.videoUrl)}>
              See demo
            </Button>
          </div>
        </div>
      </AnimationOnScroll>
    ));

  return (
    <Section title="Portfolio" description={description} contentClassName={''} id="#portfolio">
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <div className={styles.videoContainer}>
          <ReactPlayer
            className={styles.video}
            controls
            playing
            url={selectedProjectVideo}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
      <Slider className={styles.slider} {...slickDot}>
        {getPortfolioCards()}
      </Slider>
    </Section>
  );
};

export default PortfolioSection;
