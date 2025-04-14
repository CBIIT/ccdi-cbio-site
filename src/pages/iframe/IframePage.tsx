import { FC, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const IframePage: FC<{ urlParams: string, id: string, title: string }> = ({urlParams, id, title}) => {
  // const navigate = useNavigate();
  // CCDI-TODO: Make the iframe height fit for the content
  useEffect(() => {
    window.addEventListener('message', (e) => {
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
    }, false);
  }, []);
  // useEffect(() => {
  //   window.addEventListener('message', (e) => {
  //     if (e.origin === process.env.REACT_APP_CCDI_CBIO_IFRAME_URL) {
  //       navigate('/');
  //     }
  //   });
  // }, []);

  const iFrameBaseUrl = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_CCDI_CBIO_IFRAME_URL
    : 'https://cbioportal-dev-content.ccdi.cancer.gov';

  return (
    <iframe
      src={`${iFrameBaseUrl}${urlParams}`}
      id={id}
      title={title}
      height="600vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default IframePage;
