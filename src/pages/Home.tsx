import { FC } from 'react';
import IframePage from './iframe/IframePage';

const Home: FC = () => {
  return (
    <>
      <h1
        aria-label="CCDI cBioPortal Home page"
        style={{margin: 0, padding: 0}}
      ></h1>

      <IframePage
        urlParams="/"
        id="ccdi-cbioportal-home-page"
        title="CCDI-cBioPortal Home page"
      />
    </>
  );
};

export default Home;
