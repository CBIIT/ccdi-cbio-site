import styled from 'styled-components';

const PageHeader = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export default function SilentPageHeader({ title }: { title: string }) {
  return <PageHeader role="heading" aria-level={1}>{title}</PageHeader>;
}
