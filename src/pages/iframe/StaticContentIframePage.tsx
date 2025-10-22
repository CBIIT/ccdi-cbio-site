import { FC, useState, useEffect, useContext } from 'react';
import IframeContainer from './IframeContainer';
import IframeBody from './IframeBody';
import IframeOverlay from './IframeOverlay';
import { DropdownContext } from '../../store/navbar-dropdown-context';

const StaticContentIframePage: FC<{
  url: string,
  id: string,
  title: string
}> = ({ url, id, title }) => {
  const { clickedTitle, setClickedTitle } = useContext(DropdownContext);
  const [srcUrl, setSrcUrl] = useState<string>('');

  useEffect(() => {
    setSrcUrl(url);
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
        height="300px"
        width="100%"
      >
        {clickedTitle && <IframeOverlay setTitle={setClickedTitle} />}
      </IframeBody>
    </IframeContainer>
  );
};

export default StaticContentIframePage;
