import styled from 'styled-components';

const PageHeader = styled.h1`
  margin: 0;
  padding: 0;
`;

export default function SilentPageHeader({ title }: { title: string }) {
  return <PageHeader aria-label={title} />;
}
