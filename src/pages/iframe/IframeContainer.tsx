import { ReactNode } from 'react';
import styled from 'styled-components';

const IframeContainerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default function IframeContainer({ id, children }: { id: string, children: ReactNode }) {
  return (
    <IframeContainerWrapper id={id}>
      {children}
    </IframeContainerWrapper>
  );
}
