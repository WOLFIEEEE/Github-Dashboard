import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import {Link, Router}  from "react-router-dom";

const Navbar = () => {
  const {isAuthenticated, loginWithRedirect,logout,user,isLoading}=useAuth0();
  const isUser= isAuthenticated && user;
  console.log(isAuthenticated,user,isLoading)
  return (
    
    <header className="header">
    {isUser && user.name && <h4 className="text"><span>Welcome , <strong>{user.name}</strong></span></h4>}
                {isUser && user.picture && <img className="img" src={user.picture} ></img>}
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon" /></label>
    <ul className="menu">
     <li><Link to="/"> Back home  </Link></li>
      <li><Link to="/Repodata" >Repos</Link></li>
      <li><Link to="/Followerdetail" >Followers</Link></li>
      <li><Link to="/Followingdetail" >Following</Link></li>
      <li> <a  href=""  onClick={()=>{logout({returnTo:window.location.origin})}}>Sign Out</a></li>
    </ul>
  </header>
//   <Wrapper>
//     {isUser && user.picture && <img src={user.picture} alt={user.name}></img>}
//     {isUser && user.name && <h4>Welcome , <strong>{user.name}</strong></h4>}
//     {isUser ? (
//       <div>
        
//         <div class="dropdown">
//   <button className="btn">Menu</button>
//   <div class="dropdown-content">
//   <Link to="/" className="btn"> Back home  </Link>
//         <Link to="/Repodata" className="btn">repository</Link>
//         <Link to="/Followerdetail" className="btn">Followers</Link>
//         <Link to="/Followingdetail" className="btn">Following</Link>
//         <button className="btn" onClick={()=>{logout({returnTo:window.location.origin})}}>Sign Out</button>
//   </div>
// </div>
       
      
//       </div>
//     ):(
// <button onClick={loginWithRedirect}>Login</button>
//     )}
//   </Wrapper>
);
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
