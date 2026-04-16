import { FC } from 'react';
import IframePage from './iframe/IframePage';
import SilentPageHeader from '../components/helpers/SilentPageHeader';

const Home: FC = () => {
  return (
    <>
      <SilentPageHeader title="CCDI cBioPortal Home page" />

      <IframePage
        urlParams="/"
        id="ccdi-cbioportal-home-page"
        title="CCDI-cBioPortal Home page"
      />
    </>
  );
};

export default Home;
