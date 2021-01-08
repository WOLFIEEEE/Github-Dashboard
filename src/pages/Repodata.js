import React from 'react';
import styled from 'styled-components';
import { Info, Repos, User, Search, Navbar ,Repodetail} from '../components';
import { Link } from 'react-router-dom';
const Repodata = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Info></Info>
      <Repodetail></Repodetail>
    </main>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Repodata;
