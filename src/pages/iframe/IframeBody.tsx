import { ReactNode, IframeHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  border: none;
  height: ${props => props.height};
  width: ${props => props.width};
`;

interface IframeBodyProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  srcUrl: string;
  title: string;
  height: string | number;
  width: string | number;
  id: string;
  className?: string;
  children?: ReactNode;
}

export default function IframeBody({
  srcUrl,
  title,
  height,
  width,
  id,
  className,
  children,
  ...props
}: IframeBodyProps) {
  return (
    <>
      <StyledIframe
        src={srcUrl}
        title={title}
        id={id}
        className={className}
        width={width}
        height={height}
        {...props}
      />
      { children }
    </>
  );
}
