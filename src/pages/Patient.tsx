import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';
import SilentPageHeader from '../components/helpers/SilentPageHeader';

const Patient: FC = () => {
  return (
    <>
      <SilentPageHeader title="CCDI cBioPortal Patient page" />

      <AdvancedIframePage
        id="ccdi-cbioportal-patient-page"
        title="CCDI-cBioPortal Patient page"
      />
    </>
  );
};

export default Patient;
