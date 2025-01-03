import { FC, useEffect, useState } from 'react';

const Home: FC = () => {
  const iframeBaseUrl = 'http://localhost:3000/';
  const [urlFromHub, setUrlFromHub] = useState(iframeBaseUrl);

  useEffect(() => {
    const urlParams = window.location.href.split('http://localhost:9000/')[1];
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
