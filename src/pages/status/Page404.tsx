import { FC } from 'react';
import IframePage from '../iframe/IframePage';
// import { Link } from 'react-router-dom';

const Page404: FC = () => {
  return (
    <IframePage
      urlParams="/*"
      id="ccdi-cbioportal-404-page"
      title="CCDI-cBioPortal 404 page"
    />
    // <div
    //   style={{
    //     margin: '20vh auto',
    //     display: 'flex',
    //     flexFlow: 'column',
    //     fontWeight: 'bold',
    //     fontSize: '1.5rem',
    //     textAlign: 'center'
    //   }}
    // >
    //   Sorry, this page doesn't exist.
    //   <Link id="return-to-home" to="/" style={{fontSize: '1rem', margin: '1rem 0'}}>
    //     Return to homepage
    //   </Link>
    // </div>
  );
};

export default Page404;
