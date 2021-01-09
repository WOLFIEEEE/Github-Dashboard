import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import {Link, Router}  from "react-router-dom";
import SearchField from "react-search-field";
import Zoom from 'react-reveal/Zoom';
import {useState} from 'react';

const Repodetail = () => {
  const [searchrepo,setSearchrepo]=useState('')
  const {repos}=React.useContext(GithubContext);
  return <div>
    <div className="all">
    <input type="text" placeholder="Search Repo.."  className="input" onChange={event=>{setSearchrepo(event.target.value)}}></input>
    </div>
    
    <div class="container">
                  <ul class="blog-post columns-2">
      {repos.filter((detail)=>{
      if(searchrepo=="")
      {
        return detail
      }
      else if(detail.name.toString().toLowerCase().includes(searchrepo.toString().toLowerCase()) )
      {
        return detail
      }
      })
      .map((detail,index)=>
      {
        const {name,
            full_name,
            created_at,
            clone_url,
            html_url,
            updated_at,
            language}=detail;
        return <Zoom>
        <li>
        <article key={index}>
          <div>
            <h3>{name}</h3>
            <h4><span className="color">FullName:- </span>{full_name}</h4>
            <h4><span className="color">Created at:- </span>{created_at}</h4>
            <h4><span className="color">Last Updated at:- </span>{updated_at}</h4>
            <h4><span className="color">Clone URL:-</span> <span className="lowerh">git clone {clone_url}</span></h4>
            <h4> <span className="color">Language Used:-</span>{language || "Not metioned" }</h4>
            <a href={html_url} className="btn">GO TO GITHUB</a>
            
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

// const Wrapper = styled.article`
//   background: var(--clr-white);
//   border-top-right-radius: var(--radius);
//   border-bottom-left-radius: var(--radius);
//   border-bottom-right-radius: var(--radius);
//   position: relative;

//   &::before {
//     content: ' followers';
//     position: absolute;
//     top: 0;
//     left: 0;
//     transform: translateY(-100%);
//     background: var(--clr-white);
//     color: var(--clr-grey-5);
//     border-top-right-radius: var(--radius);
//     border-top-left-radius: var(--radius);
//     text-transform: capitalize;
//     padding: 0.5rem 1rem 0 1rem;
//     letter-spacing: var(--spacing);
//     font-size: 1rem;
//   }
//   .followers {
//     overflow: scroll;
//     height: 260px;
//     display: grid;
//     grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
//     gap: 1.25rem 1rem;
//     padding: 1rem 2rem;
//   }
//   article {
//     transition: var(--transition);
//     padding: 0.15rem 0.5rem;
//     border-radius: var(--radius);
//     display: grid;
//     grid-template-columns: auto 1fr;
//     align-items: center;
//     column-gap: 1rem;
//     img {
//       height: 100%;
//       width: 45px;
//       border-radius: 50%;
//       object-fit: cover;
//     }
//     h4 {
//       margin-bottom: 0;
//     }
//     a {
//       color: var(--clr-grey-5);
//     }
//   }
// `;
export default Repodetail;
