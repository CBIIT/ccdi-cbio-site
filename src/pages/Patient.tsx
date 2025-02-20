import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';

const Patient: FC = () => {
  return (
    <>
      <h1
        aria-label="CCDI cBioPortal Patient page"
        style={{margin: 0, padding: 0}}
      ></h1>

      <AdvancedIframePage
        id="ccdi-cbioportal-patient-page"
        title="CCDI-cBioPortal Patient page"
      />
    </>
  );
};

export default Patient;
