import { FC, useState, useEffect } from 'react';

const StaticContentIframePage: FC<{
  localUrl: string,
  liveUrl: string,
  id: string,
  title: string
}> = ({ localUrl, liveUrl, id, title }) => {
  const [srcUrl, setSrcUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tierName = window.location.hostname.split('.')[0].split('-')[1];
      const isLocalEnv = process.env.NODE_ENV === 'development';
      const isDevEnv = (tierName === 'dev') || (tierName === 'qa');
      if (isLocalEnv) {
        setSrcUrl(localUrl);
      } else {
        setSrcUrl(isDevEnv ? `${liveUrl}?dev` : liveUrl);
      }
    }
  }, []);

  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      const iframeTag = document.getElementById(id);
      const eventName = e.data[0];
      const data = e.data[1];
      switch (eventName) {
        case 'setHeight':
          if (iframeTag) {
            iframeTag.style.height = `${data}px`;
          }
          break;
      }
    };
    window.addEventListener('message', messageHandler, false);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  return (
    <iframe
      src={srcUrl}
      id={id}
      title={title}
      height="300vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default StaticContentIframePage;
