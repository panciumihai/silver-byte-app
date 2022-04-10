import classNames from 'classnames';
import { FC, useState } from 'react';
import { AboutMeType, BasicProps } from '../../types';
import Tabs from '../Tabs/Tabs';
import Wrapper from '../Wrapper/Wrapper';

import styles from './AboutMe.module.scss';

interface AboutMeProps extends BasicProps {
  profile: AboutMeType;
}

const AboutMe: FC<AboutMeProps> = (props) => {
  const { className, profile } = props;

  const [selectedTab, setSelectedTab] = useState(profile.tabs[0].label);

  return (
    <Wrapper className={styles.wrapper} component="section" id="#aboutUs">
      <div className={styles.imageContainer}>
        <img src={profile.image} alt={`${profile.name} thumbnail`}></img>
      </div>
      <div className={styles.contentContainer}>
        <h1>About Me</h1>
        <p>{profile.description}</p>
        <div>
          <Tabs
            className={styles.tabs}
            labels={profile.tabs.map((tab) => tab.label)}
            onChange={setSelectedTab}
            value={selectedTab}
          ></Tabs>
          {profile.tabs.find((tab) => tab.label === selectedTab)?.content}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
