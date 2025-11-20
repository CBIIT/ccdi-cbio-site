import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';

const DataUsing: FC = () => {
  return (
    <StaticContentIframePage
      url={
        process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL
          ? `${process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL}/data-using`
          : ''
      }
      id="using-ccdi-cbioportal-data"
      title="Using CCDI cBioPortal Data"
    />
  );
};

export default DataUsing;
