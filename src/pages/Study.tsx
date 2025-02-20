import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';

const Study: FC = () => {
  return (
    <>
      <h1
        aria-label="CCDI cBioPortal Study page"
        style={{margin: 0, padding: 0}}
      ></h1>

      <AdvancedIframePage
        id="ccdi-cbioportal-study-page"
        title="CCDI-cBioPortal Study page"
      />
    </>
  );
};

export default Study;
