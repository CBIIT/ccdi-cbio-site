import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IframeOverlay = ({ setTitle }: { setTitle: (title: string) => void }) => {
  return <OverlayStyled onClick={() => setTitle('')} />;
};

export default IframeOverlay;
