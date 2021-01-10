import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { AnimationWrapper } from 'react-hover-animation'

const UserInfo = () => {
  const {GithubUser}=React.useContext(GithubContext)
  const {public_repos ,followers,following ,public_gists}=GithubUser;

  const items =[
    { id:1,icon:<GoRepo className="icon"/>,label:'Repos',value:public_repos,color:'pink',},
    { id:2,icon:<FiUsers className="icon"/>,label:'Follower',value:followers,color:'green',},
    { id:3,icon:<FiUserPlus className="icon"/>,label:'Following',value:following,color:'purple',},
    { id:4,icon:<GoGist className="icon"/>,label:'Gist',value:public_gists,color:'yellow',}
  ]
  return (
    <div className="section">
  <Wrapper className="section-center">
    {items.map((item)=>{
      // Interating Throughout the Items array
      return <AnimationWrapper
      >
      <p>
        <Item key={item.id} {...item}></Item>
      </p>
      </AnimationWrapper>
    }
    )}

  </Wrapper>
 
  </div> 
  );

 
};

// Return the component For the above map function
const Item =({icon,label,value,color})=>{
  return <article className="item">
    <span className={color}>{icon}</span>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
    
  </article>
}
// return componnet ended
const Wrapper = styled.section`
  display: grid;
  margin-top:80px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-info-dark);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
