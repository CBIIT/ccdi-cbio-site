import { FC, useEffect, useState } from 'react';

const Home: FC = () => {
  const isLocalDev = window.location.hostname === 'localhost';
  const iframeBaseUrl = isLocalDev ? 'http://localhost:3000' : `${window.location.origin}/iframe`;
  const [urlFromHub, setUrlFromHub] = useState(iframeBaseUrl);

  useEffect(() => {
    const urlParams = window.location.href.split(window.location.origin)[1];
    setUrlFromHub(`${iframeBaseUrl}${urlParams}`);
  }, []);

  return (
    <iframe
      id="ccdi-cbioportal-home-page"
      src={urlFromHub}
      height="500vh"
      width="100%"
      style={{border: 'none'}}
      title="CCDI-cBioPortal Home page"
    ></iframe>
  );
};

export default Home;
