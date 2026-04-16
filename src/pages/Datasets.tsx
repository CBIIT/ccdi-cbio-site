import { FC } from 'react';
import IframePage from './iframe/IframePage';

const Datasets: FC = () => {
  return (
    <IframePage
      urlParams="/datasets"
      id="ccdi-cbioportal-datasets-page"
      title="CCDI-cBioPortal Datasets page"
    />
  );
};

export default Datasets;
