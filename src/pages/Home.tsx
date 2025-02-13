import { FC } from 'react';
import IframePage from './iframe/IframePage';

const Home: FC = () => {
  return (
    <IframePage
      urlParams="/ccdi-cbio-site/"
      id="ccdi-cbioportal-home-page"
      title="CCDI-cBioPortal Home page"
    />
  );
};

export default Home;
