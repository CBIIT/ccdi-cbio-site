import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';
import { joinEnvUrl } from '../utils/envUrls';

const About: FC = () => {
  const contentUiUrl = joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL, '/about');
  return (
    <StaticContentIframePage
      url={contentUiUrl}
      id="about-ccdi-cbioportal"
      title="About CCDI cBioPortal"
    />
  );
};

export default About;
