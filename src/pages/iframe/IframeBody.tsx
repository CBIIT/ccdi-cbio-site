import { ReactNode, IframeHTMLAttributes } from 'react';
import styled from 'styled-components';

// Allow only numbers (optionally with px, %, em, rem) or a whitelist of safe strings
const allowedStrings = ['auto', 'inherit', 'initial', 'unset', '100%', '100vw', '100vh'];
function sanitizeSize(value: string | number): string {
  const MAX_SIZE = 5000;

  if (typeof value === 'number') {
    if (value > 0 && value <= MAX_SIZE) {
      return value + 'px';
    }
    return 'auto';
  }

  if (allowedStrings.includes(value)) {
    return value;
  }

  // Allow numbers with units (e.g., 100px, 50%) and check upper bound
  const match = value.match(/^(\d+)(px|em|rem|%)$/);
  if (match) {
    const num = parseInt(match[1], 10);
    if (num > 0 && num <= MAX_SIZE) {
      return value;
    }
    return 'auto';
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
        $height={height}
        $width={width}
        {...props}
      />
      {children}
    </>
  );
}
