import { FC } from 'react';

const About: FC = () => {
  return (
    <div
      style={{
        margin: '20vh auto',
        display: 'flex',
        flexFlow: 'column',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textAlign: 'center'
      }}
    >
      This is About Page.
    </div>
  );
};

export default About;
