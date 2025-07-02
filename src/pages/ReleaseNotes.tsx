import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';

const ReleaseNotes: FC = () => {
  return (
    <StaticContentIframePage
      localUrl={process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL}
      liveUrl="https://cbiit.github.io/ccdi-cbio-content-ui"
      id="dataset-and-release-notes"
      title="Dataset and Release Notes"
    />
  );
};

export default ReleaseNotes;
