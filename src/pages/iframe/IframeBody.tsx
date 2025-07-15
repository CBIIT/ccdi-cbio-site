import { ReactNode } from 'react';

interface IframeBodyProps {
  srcUrl: string;
  title: string;
  height: string | number;
  width: string | number;
  id: string;
  className: string;
  children: ReactNode;
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
      <iframe
        src={srcUrl}
        title={title}
        height={height}
        width={width}
        id={id}
        className={className}
        {...props}
      />
      { children }
    </>
  );
}
