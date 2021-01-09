import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import {Link, Router}  from "react-router-dom";

const Navbar = () => {
  const {isAuthenticated, loginWithRedirect,logout,user,isLoading}=useAuth0();
  const isUser= isAuthenticated && user;
  console.log(isAuthenticated,user,isLoading)
  return <Wrapper>
    {isUser && user.picture && <img src={user.picture} alt={user.name}></img>}
    {isUser && user.name && <h4>Welcome , <strong>{user.name}</strong></h4>}
    {isUser ? (
      <div>
        
        <div class="dropdown">
  <button className="btn">Menu</button>
  <div class="dropdown-content">
  <Link to="/" className="btn"> Back home  </Link>
        <Link to="/Repodata" className="btn">repository</Link>
        <Link to="/Followerdetail" className="btn">Followers</Link>
        <Link to="/Followingdetail" className="btn">Following</Link>
  </div>
  <button className="btn" onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</button>
</div>
       
      
      </div>
    ):(
<button onClick={loginWithRedirect}>Login</button>
    )}
  </Wrapper>
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-info-dark);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  div
  {
   
  }
`;

export default Navbar;
