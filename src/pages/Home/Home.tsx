import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TechnologiesSection from '../../components/TechnologiesSection/TechnologiesSection';
import { BasicProps } from '../../types';

interface HomeProps extends BasicProps {}

const Home: FC<HomeProps> = (props) => {
  const {} = props;
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <TechnologiesSection />
      <Footer />
    </>
  );
};

export default Home;
