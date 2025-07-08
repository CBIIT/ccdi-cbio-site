import { FC, useEffect, useContext } from 'react';
import { DropdownContext } from '../../store/navbar-dropdown-context';
// import { useNavigate } from "react-router-dom";

const IframePage: FC<{ urlParams: string, id: string, title: string }> = ({urlParams, id, title}) => {
  const { clickedTitle } = useContext(DropdownContext);
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
    <div
      id={`${id}-iframe-container`}
      style={{width: '100%', position: 'relative'}}
    >
      <iframe
        src={`${process.env.REACT_APP_CCDI_CBIO_IFRAME_URL}${urlParams}`}
        id={id}
        title={title}
        height="600vh"
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

export default IframePage;
