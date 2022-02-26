import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import { BasicProps } from '../../types';

interface HomeProps extends BasicProps {}

const Home: FC<HomeProps> = (props) => {
  const {} = props;
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
