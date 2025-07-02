import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';

const About: FC = () => {
  return (
    <StaticContentIframePage
      localUrl={process.env.REACT_APP_CCDI_CBIO_ABOUT_URL}
      liveUrl="https://cbiit.github.io/ccdi-cbio-content-ui/about"
      id="about-ccdi-cbioportal"
      title="About CCDI cBioPortal"
    />
  );
};

export default About;
