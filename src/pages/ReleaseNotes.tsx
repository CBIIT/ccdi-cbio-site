import { FC, useState, useEffect } from 'react';

const ReleaseNotes: FC = () => {
  const [srcUrl, setSrcUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tierName = window.location.hostname.split('.')[0].split('-')[1];
      const isLocalEnv = process.env.NODE_ENV === 'development';
      const isDevEnv = (tierName === 'dev') || (tierName === 'qa');
      if (isLocalEnv) {
        setSrcUrl(process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL);
      } else {
        setSrcUrl(
          isDevEnv
            ? 'https://cbiit.github.io/ccdi-cbio-content-ui?dev'
            : 'https://cbiit.github.io/ccdi-cbio-content-ui'
        );
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', (e) => {
      const iframeTag = document.getElementById('dataset-and-release-notes');
      const eventName = e.data[0];
      const data = e.data[1];
      switch (eventName) {
        case 'setHeight':
          if (iframeTag) {
            iframeTag.style.height = `${data}px`;
          }
          break;
      }
    }, false);
  }, []);

  return (
    <iframe
      src={srcUrl}
      id="dataset-and-release-notes"
      title="Dataset and Release Notes"
      height="300vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default ReleaseNotes;
