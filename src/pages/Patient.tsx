import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';

const Patient: FC = () => {
  return (
    <AdvancedIframePage
      id="ccdi-cbioportal-patient-page"
      title="CCDI-cBioPortal Patient page"
    />
  );
};

export default Patient;
