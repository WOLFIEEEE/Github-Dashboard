import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import {Link, Router}  from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
 
  return (
    <footer className="new_footer_area bg_color">
    <div className="new_footer_top">
      <div className="container">
        <div className="row">
            <div className="makedown">
          <div className="col-lg-3 col-md-6">
            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
              <h3 className="f-title f_600 t_color f_size_18"><span className="color">About Project</span></h3>
              <p className="color">It's a project to show github data in Form of Graph <br></br>, I used React js and css for the front-end and<br></br> Auth0(A third party app) for authentication Purpose and the rest are bunch of node packages</p>
              <a href="https://github.com/WOLFIEEEE/Github-Dashboard" >See this project on github</a>
            </div>
          </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft'}}>
              <div className="f_social_icon">
                <a href="https://www.facebook.com/khushwant.parihar.31/" className="fab fa-facebook-f" ><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://github.com/WOLFIEEEE" className="fab fa-facebook-f" ><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/khushwantparihar/" className="fab fa-facebook-f" ><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.instagram.com/khushwantparihar/" className="fab fa-facebook-f" ><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bg">
        <div className="footer_bg_one" />
        <div className="footer_bg_two" />
      </div>
    </div>
    <div className="footer_bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-5 text-right">
            <p>Made by :-Khushwant</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  );
};


export default Footer;
