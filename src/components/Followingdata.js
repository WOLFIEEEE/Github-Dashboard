import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import {Link, Router}  from "react-router-dom";
import SearchField from "react-search-field";
import Zoom from 'react-reveal/Zoom';
import {useState} from 'react';

const Followingdata = () => {
  var a=0;
  const [searchfollowing,setsearchfollowing]=useState('')
  const {following}=React.useContext(GithubContext);
  console.log(following)
  return <div>
    <div className="all">
    <input type="text" placeholder="Search Following"  className="input" onChange={event=>{setsearchfollowing(event.target.value)}}></input>
    </div>
    
    <div class="container">
                  <ul class="blog-post columns-2">
        
      {following.filter((detail)=>{
        
      if(searchfollowing=="")
      {
        return detail
      }
      
      else if(detail.login.toString().toLowerCase().includes(searchfollowing.toString().toLowerCase()) )
      {
        return detail
      }
      })
      .map((detail,index)=>
      {
        a=a+1;
        const {login,
            html_url,
            avatar_url:img,
            repos_url,}=detail;
            if(a>0)
            {
              
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
      }
      )}      

    </ul>
    </div>
  </div>
  
};

export default Followingdata;