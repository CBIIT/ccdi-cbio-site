import { FC } from 'react';

const ReleaseNotes: FC = () => {
  return (
    <iframe
      // TODO: Replace ENV VAR with GitHub pages later 
      src={process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL}
      id="datasets-and-release-notes"
      title="Datasets and Release Notes"
      height="700vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default ReleaseNotes;
