import { FC } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  margin: 20vh auto;
  display: flex;
  flex-flow: column;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const Login: FC = () => {
  return (
    <LoginContainer>
      This is Login Page.
    </LoginContainer>
  );
};

export default Login;
