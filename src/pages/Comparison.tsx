import { FC } from 'react';
import AdvancedIframePage from './iframe/AdvancedIframePage';
import SilentPageHeader from '../components/helpers/SilentPageHeader';

const Comparison: FC = () => {
  return (
    <>
      <SilentPageHeader title="CCDI cBioPortal Comparison page" />

      <AdvancedIframePage
        id="ccdi-cbioportal-comparison-page"
        title="CCDI-cBioPortal Comparison page"
      />
    </>
  );
};

export default Comparison;
