import { FC, useState, useEffect, useContext } from 'react';
import IframeContainer from './IframeContainer';
import IframeBody from './IframeBody';
import IframeOverlay from './IframeOverlay';
import { DropdownContext } from '../../store/navbar-dropdown-context';

const StaticContentIframePage: FC<{
  localUrl: string,
  liveUrl: string,
  id: string,
  title: string
}> = ({ localUrl, liveUrl, id, title }) => {
  const { clickedTitle, setClickedTitle } = useContext(DropdownContext);
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
    <IframeContainer id={`${id}-iframe-container`}>
      <IframeBody
        srcUrl={srcUrl}
        id={id}
        title={title}
        height="100vh"
        width="100%"
      >
        {clickedTitle && <IframeOverlay setTitle={setClickedTitle} />}
      </IframeBody>
    </IframeContainer>
  );
};

export default StaticContentIframePage;
