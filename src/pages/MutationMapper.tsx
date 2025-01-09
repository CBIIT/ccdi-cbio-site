import { FC } from 'react';
import IframePage from './iframe/IframePage';

const MutationMapper: FC = () => {
  return (
    <IframePage
      urlParams="/mutation_mapper"
      id="ccdi-cbioportal-mutation_mapper-page"
      title="CCDI-cBioPortal Mutation Mapper page"
    />
  );
};

export default MutationMapper;
