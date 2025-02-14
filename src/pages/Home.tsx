import { FC } from 'react';
import IframePage from './iframe/IframePage';

const Home: FC = () => {
  return (
    <IframePage
      urlParams="/"
      id="ccdi-cbioportal-home-page"
      title="CCDI-cBioPortal Home page"
    />
  );
};

export default Home;
