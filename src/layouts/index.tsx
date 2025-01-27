import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollButton from '../components/ScrollButton/ScrollButtonView';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>CCDI cBioPortal</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;700&family=Lato:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Nunito+Sans:wght@400;500;600;700;900&family=Nunito:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
        <Container
          maxWidth={false}
          sx={{ minHeight: '600px'}}
          style={{paddingLeft: 0, paddingRight: 0, maxWidth: 1600}}
        >
          <Box display="flex">
            {children || <Outlet />}
          </Box>
        </Container>
      <Footer />
      <ScrollButton />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
