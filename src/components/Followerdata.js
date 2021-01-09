import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import {Link, Router}  from "react-router-dom";
import SearchField from "react-search-field";
import Zoom from 'react-reveal/Zoom';
import {useState} from 'react';

const Followerdata = () => {
  const [searchfollower,setsearchfollower]=useState('')
  const {followers}=React.useContext(GithubContext);
  return <div>
    <div className="all">
    <input type="text" placeholder="Search Follower"  className="input" onChange={event=>{setsearchfollower(event.target.value)}}></input>
    </div>
    
    <div class="container">
                  <ul class="blog-post columns-2">
      {followers.filter((detail)=>{
      if(searchfollower=="")
      {
        return detail
      }
      else if(detail.login.toString().toLowerCase().includes(searchfollower.toString().toLowerCase()) )
      {
        return detail
      }
      })
      .map((detail,index)=>
      {
        const {login,
            html_url,
            avatar_url:img,
            repos_url,}=detail;
        return <Zoom>
        <li>
        <article key={index}>
          <div>
          <img className="imgc" src={img}></img>
            <h4>{login}</h4>
            <a href={html_url} className="btn">Show on Github</a>
            
            
          </div>
        </article>
        </li>
        </Zoom> 
      }
      )}
    </ul>
    </div>
  </div>
};

export default Followerdata;