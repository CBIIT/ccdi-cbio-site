import { FC } from 'react';
import { Link } from 'react-router-dom';

const Page404: FC = () => {
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
      Sorry, the page is Not Found
      <Link id="return-to-home" to="/" style={{fontSize: '1rem', margin: '1rem 0'}}>
        Return to the Home Page
      </Link>
    </div>
  );
};

export default Page404;
