import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { headerData } from '../../../config/globalHeaderData';

const LogoArea = styled.div`
    display: flex;

    .logoContainer {
      margin-top: 32px;

      img {
        height: 50px;
        max-width: 350px;
      }
    }
`;

const Logo = () => (
  <LogoArea>
    <Link id="header-logo-home-link" className="logoContainer" to={headerData.globalHeaderLogoLink}>
      <img src={headerData.globalHeaderLogoSmall} alt={headerData.globalHeaderLogoAltText} />
    </Link>
  </LogoArea>
);

export default Logo;
