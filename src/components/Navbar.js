import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import {Link, Router}  from "react-router-dom";

const Navbar = () => {
  const {isAuthenticated, loginWithRedirect,logout,user,isLoading}=useAuth0();
  const isUser= isAuthenticated && user;
  console.log(isAuthenticated,user,isLoading)
  return (
    <div>
        <nav className="sticky navbar">
          <div className="brand  display__logo">
            <a href="#top" className="nav__link"> <span className="logo">
            {isUser && user.name && <h4 className="text"><span>Welcome , <strong>{user.name}</strong></span></h4>}
                {isUser && user.picture && <img className="img" src={user.picture} ></img>}
              </span></a>
          </div>
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav__open"><i /><i /><i /></label>
          <div className="nav">
            <ul className="nav__items">
            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
           
            <li className="nav__item"><Link to="/Followerdetail" className="nav__link">Follower</Link></li>
            <li className="nav__item"><Link to="/Followingdetail" className="nav__link">Following</Link></li>
            <li className="nav__item"><Link to="/Repodata" className="nav__link">Repos</Link></li>
              <li className="nav__item"> <a className="nav__link" href=""  onClick={()=>{logout({returnTo:window.location.origin})}}>Sign Out</a></li>
            </ul>
          </div>
        </nav>
      </div>

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
