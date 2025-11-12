import { FC, ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollButton from '../components/ScrollButton/ScrollButtonView';
import { DropdownContext } from '../store/navbar-dropdown-context';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [clickedTitle, setClickedTitle] = useState('');
  return (
    <DropdownContext.Provider value={{ clickedTitle, setClickedTitle }}>
      <Helmet>
        <title>Childhood Cancer Data Initiative (CCDI) cBioPortal</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;700&family=Lato:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Nunito+Sans:wght@400;500;600;700;900&family=Nunito:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <main aria-label="CCDI CBIO Main Section">
        <Container
          maxWidth={false}
          sx={{minHeight: 600}}
          style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 70, minHeight: 300}}
        >
          <Box display="flex">
            {children || <Outlet />}
          </Box>
        </Container>
      </main>
      <Footer />
      <ScrollButton />
    </DropdownContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
