import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';

const About: FC = () => {
  return (
    <StaticContentIframePage
      url={process.env.REACT_APP_CCDI_CBIO_ABOUT_URL}
      id="about-ccdi-cbioportal"
      title="About CCDI cBioPortal"
    />
  );
};

export default About;
