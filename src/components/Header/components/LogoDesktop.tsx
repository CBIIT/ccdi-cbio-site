import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerData } from '../../../config/globalHeaderData';

const LogoArea = styled.div`
    display: flex;

    img {
      width: fit-content;
      height: 56px;
    }

    .logoContainer {
      margin-top: 35px;
    }

`;

const Logo = () => (
  <LogoArea>
    <Link id="header-logo-home-link" className="logoContainer" to={headerData.globalHeaderLogoLink}>
      <img src={headerData.globalHeaderLogo} alt={headerData.globalHeaderLogoAltText} />
    </Link>
  </LogoArea>
);

export default Logo;
