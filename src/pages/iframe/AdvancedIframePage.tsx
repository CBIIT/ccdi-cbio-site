import { FC, useEffect, useState } from 'react';
import IframePage from './IframePage';

const AdvancedIframePage: FC<{ id: string, title: string }> = ({id, title}) => {
  const [urlParamsFromHub, setUrlParamsFromHub] = useState('/');

  useEffect(() => {
    const urlParams = window.location.href.split(process.env.REACT_APP_CCDI_CBIO_SITE_URL)[1];
    setUrlParamsFromHub(urlParams);
  }, []);

  return (
    <IframePage
      urlParams={urlParamsFromHub}
      id={id}
      title={title}
    />
  );
};

export default AdvancedIframePage;
