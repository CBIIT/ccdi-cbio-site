import { FC } from 'react';

const Visualize: FC = () => {
  return (
    <iframe src="http://localhost:3000/visualize" height="500vh" width="100%" style={{border: 'none'}}></iframe>
  );
};

export default Visualize;
