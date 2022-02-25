import { FC } from 'react';
import Header from '../../components/Header/Header';
import { BasicProps } from '../../types';

interface HomeProps extends BasicProps {}

const Home: FC<HomeProps> = (props) => {
  const {} = props;
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
