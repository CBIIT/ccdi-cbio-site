import { FC } from 'react';
import IframePage from './iframe/IframePage';

const Visualize: FC = () => {
  return (
    <IframePage
      urlParams="/visualize"
      id="ccdi-cbioportal-visualize-page"
      title="CCDI-cBioPortal Visualize page"
    />
  );
};

export default Visualize;
