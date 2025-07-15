import { FC, useEffect, useContext } from 'react';
import IframeContainer from './IframeContainer';
import IframeBody from './IframeBody';
import IframeOverlay from './IframeOverlay';
import { DropdownContext } from '../../store/navbar-dropdown-context';
// import { useNavigate } from "react-router-dom";

const IframePage: FC<{ urlParams: string, id: string, title: string }> = ({urlParams, id, title}) => {
  const { clickedTitle, setClickedTitle } = useContext(DropdownContext);
  // const navigate = useNavigate();
  // CCDI-TODO: Make the iframe height fit for the content
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
        case 'setUrl':
          window.history.replaceState({}, '', window.location.protocol + "//" + window.location.host + data);
          break;
      }
    };
    window.addEventListener('message', messageHandler, false);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);
  // useEffect(() => {
  //   window.addEventListener('message', (e) => {
  //     if (e.origin === process.env.REACT_APP_CCDI_CBIO_IFRAME_URL) {
  //       navigate('/');
  //     }
  //   });
  // }, []);

  return (
    <IframeContainer id={`${id}-iframe-container`}>
      <IframeBody
        srcUrl={`${process.env.REACT_APP_CCDI_CBIO_IFRAME_URL}${urlParams}`}
        id={id}
        className="iframePage"
        title={title}
        height="600px"
        width="100%"
      >
        {clickedTitle && <IframeOverlay setTitle={setClickedTitle} />}
      </IframeBody>
    </IframeContainer>
  );
};

export default IframePage;
