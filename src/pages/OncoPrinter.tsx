import { FC } from 'react';
import IframePage from './iframe/IframePage';

const OncoPrinter: FC = () => {
  return (
    <IframePage
      urlParams="/oncoprinter"
      id="ccdi-cbioportal-oncoprinter-page"
      title="CCDI-cBioPortal OncoPrinter page"
    />
  );
};

export default OncoPrinter;
