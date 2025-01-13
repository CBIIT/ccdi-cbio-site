import { FC } from "react";

const IframePage: FC<{ urlParams: string, id: string, title: string }> = ({urlParams, id, title}) => {
  const isLocalDev = window.location.hostname === 'localhost';
  const iframeBaseUrl = isLocalDev ? 'http://localhost:3000' : `${window.location.origin}/iframe`;

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
      src={`${iframeBaseUrl}${urlParams}`}
      id={id}
      title={title}
      height="2400vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default IframePage;
