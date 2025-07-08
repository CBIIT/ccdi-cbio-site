import { FC, useState, useEffect, useContext } from 'react';
import { DropdownContext } from '../../store/navbar-dropdown-context';

const StaticContentIframePage: FC<{
  localUrl: string,
  liveUrl: string,
  id: string,
  title: string
}> = ({ localUrl, liveUrl, id, title }) => {
  const { clickedTitle } = useContext(DropdownContext);
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
    <div
      id={`${id}-iframe-container`}
      style={{width: '100%', position: 'relative'}}
    >
      <iframe
        src={srcUrl}
        id={id}
        title={title}
        height="300vh"
        width="100%"
        style={{border: 'none'}}
      />
      {clickedTitle && (
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        ></div>
      )}
    </div>
  );
};

export default StaticContentIframePage;
