import { ReactNode, IframeHTMLAttributes } from 'react';
import styled from 'styled-components';

// Allow only numbers (optionally with px, %, em, rem) or a whitelist of safe strings
const allowedStrings = ['auto', 'inherit', 'initial', 'unset', '100%', '100vw', '100vh'];
function sanitizeSize(value: string | number): string {
  if (typeof value === 'number') {
    return value + 'px';
  }
  if (allowedStrings.includes(value)) {
    return value;
  }
  // Allow numbers with units (e.g., 100px, 50%)
  if (/^\d+(px|em|rem|%)$/.test(value)) {
    return value;
  }
  // Fallback to 'auto' if invalid
  return 'auto';
}

const StyledIframe = styled.iframe<{
  $height: string | number;
  $width: string | number;
}>`
  border: none;
  height: ${props => sanitizeSize(props.$height)};
  width: ${props => sanitizeSize(props.$width)};
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
        $height={height}
        $width={width}
        {...props}
      />
      { children }
    </>
  );
}
