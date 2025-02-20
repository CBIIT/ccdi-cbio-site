import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';

const Comparison: FC = () => {
  return (
    <>
      <h1
        aria-label="CCDI cBioPortal Comparison page"
        style={{margin: 0, padding: 0}}
      ></h1>

      <AdvancedIframePage
        id="ccdi-cbioportal-comparison-page"
        title="CCDI-cBioPortal Comparison page"
      />
    </>
  );
};

export default Comparison;
