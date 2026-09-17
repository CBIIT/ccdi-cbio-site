import { FC } from 'react';
import StaticContentIframePage from './iframe/StaticContentIframePage';
import { joinEnvUrl } from '../utils/envUrls';

const ReleaseNotes: FC = () => {
  return (
    <StaticContentIframePage
      url={joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL, '')}
      id="dataset-and-release-notes"
      title="Dataset and Release Notes"
    />
  );
};

export default ReleaseNotes;
