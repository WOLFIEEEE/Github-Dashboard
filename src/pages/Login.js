import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import github from '../images/github.gif';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
      <h1>github dashboard</h1>
        <img src={github} alt='github user' />
        <button className='btn' onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  body {
 background-image: url('https://wallpapercave.com/w/wp3082259');
}
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width:70%;
    height:70%;
    display:flex;
    margin-left:13%;
    justify-content:center;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
