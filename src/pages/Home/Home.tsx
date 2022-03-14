import { FC } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactUsSection from '../../components/ContactUsSection/ContactUsSection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TechnologiesSection from '../../components/TechnologiesSection/TechnologiesSection';

import { AboutMeType, BasicProps } from '../../types';

import MihaiImage from '../../assets/images/team/mihai.jpeg';
import TabPanel from '../../components/Tabs/TabPanel';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';

const ABOUT_MIHAI_MOCK: AboutMeType = {
  image: MihaiImage,
  name: 'Mihai Panciu',
  description:
    "Hi! I'm Mihai. I have over 3+ years of development experience specialized in React. Problem-solver, Proactive, Fast-learner type of person which is passionate about Web Development.",
  tabs: [
    {
      label: 'Main skills',
      content: (
        <TabPanel>
          <label>Front End</label>
          <p>React (Redux, React Routing, Bootstrap)</p>
          <p>HTML5, CSS3, SASS, Styled Components</p>
          <p>TypeScript, JavaScript, Git, HTTP</p>
          <label>Soft skills</label>
          <p>Experience with Agile (Scrum), Fast Learner, Problem Solver</p>
        </TabPanel>
      ),
    },
    {
      label: 'Experience',
      content: (
        <TabPanel>
          <label>FREELANCER | React Developer</label>
          <p>Feb 2022 - Present | Remote</p>
          <label>NESS DIGITAL ENGINEERING | Web Developer</label>
          <p>Nov 2020 - Feb 2022 | Remote</p>
          <label>VAST:VISIBILITY | Web Developer</label>
          <p>Oct 2019 - Nov 2020 | Remote</p>
          <label>ENDAVA | Full-Stack Developer Intern</label>
          <p>Jul 2018 – Sep 2018 | Iaşi, RO</p>
        </TabPanel>
      ),
    },
    {
      label: 'Education',
      content: (
        <TabPanel>
          <label>Computer Science Bachelor's degree</label>
        </TabPanel>
      ),
    },
  ],
};

interface HomeProps extends BasicProps {}

const Home: FC<HomeProps> = (props) => {
  const {} = props;
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <TechnologiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutMe profile={ABOUT_MIHAI_MOCK} />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default Home;
