const IframePage = ({urlParams, id, title}) => {
  const isLocalDev = window.location.hostname === 'localhost';
  const iframeBaseUrl = isLocalDev ? 'http://localhost:3000' : `${window.location.origin}/iframe`;
  return (
    <iframe
      src={`${iframeBaseUrl}${urlParams}`}
      id={id}
      title={title}
      height="500vh"
      width="100%"
      style={{border: 'none'}}
    />
  );
};

export default IframePage;
