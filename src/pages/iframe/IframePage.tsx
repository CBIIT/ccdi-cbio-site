import { FC } from "react";

const IframePage: FC<{ urlParams: string, id: string, title: string }> = ({urlParams, id, title}) => {
  // // CCDI-TODO: Make the iframe height fit for the content
  // useEffect(() => {
  //   window.addEventListener('message', (e) => {
  //     const iframeTag = document.getElementById(id);
  //     const eventName = e.data[0];
  //     const data = e.data[1];
  //     switch (eventName) {
  //       case 'setHeight':
  //         if (iframeTag) {
  //           iframeTag.style.height = `${data}px`;
  //           console.log('setHeight:', iframeTag.style.height)
  //         }
  //         break;
  //     }
  //   }, false);
  // }, []);

  return (
    <iframe
      src={`${process.env.REACT_APP_CCDI_CBIO_IFRAME_URL}${urlParams}`}
      id={id}
      title={title}
      height="2400vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default IframePage;
