import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {
  const [user,setUser]=React.useState('');
  const {request,error,searchGithubUser,isloading}=React.useContext(GithubContext);
  //get things from global
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user)
    {
      searchGithubUser(user);
    }
  }
  return(
    <section className="section">
      <Wrapper className="section-center">
        {error.show &&
        <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper> 
        }
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch></MdSearch>
            <input type="text" placeholder="Github user" value={user} onChange={(e)=>setUser(e.target.value)}></input>
            {request>0 && !isloading && <button type="submit">search</button>}
          </div>
        </form>
<h3>Request:- {request}/60</h3>
      </Wrapper>
    </section>
  ) 
  
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-info-dark);
    display: grid;
   
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-dark-1);
      letter-spacing: var(--spacing);
      background-color:var(--clr-info-dark);
      color:white;
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color:white;
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
      color:white;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
