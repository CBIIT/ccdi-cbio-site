import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';
import SilentPageHeader from '../components/helpers/SilentPageHeader';

const Study: FC = () => {
  return (
    <>
      <SilentPageHeader title="CCDI cBioPortal Study page" />

      <AdvancedIframePage
        id="ccdi-cbioportal-study-page"
        title="CCDI-cBioPortal Study page"
      />
    </>
  );
};

export default Study;
