import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import { AnimationWrapper } from 'react-hover-animation'
const Repos = () => {
  const{repos} = React.useContext(GithubContext);   //using mockrepos
  const{userstars}=React.useContext(GithubContext); // using mockSTars
 
  //..................................... For languages of you Repos library........................................................... 
  let languages=repos.reduce((total,item)=>{
    const { language}=item;
    if(!language) return total; // if the language is null
    if(!total[language])//if the language is not defined(1st instance)
    {
      total[language]={label:language,
        value:1};
    }
    else // if the language is defined (2nd instance)
    {
    total[language]={...total[language],value:total[language].value+1};
    }
    return total;

  },{});

  //making object return a array of value languages is our object and we need a array of value
  languages=Object.values(languages).sort((a,b)=>{
    return b.value-a.value;
  }).slice(0,5);
  // sort(a,b) {b-a } return array in desceding order and {a-b} gives array in ascending order
  //these are knows as compare fuction
//..................................... For languages of you Repos library........................................................... Ended

  //..................................... For languages of you stars library...........................................................
  let starlang=userstars.reduce((total,item)=>{
    const {language}=item;
    if(!language) return total; // if the language is null
    if(!total[language])//if the language is not defined(1st instance)
    {
      total[language]={label:language,
        value:1};
    }
    else // if the language is defined (2nd instance)
    {
    total[language]={...total[language],value:total[language].value+1};
    }
    return total;

  },{});

  //making object return a array of value languages is our object and we need a array of value
  starlang=Object.values(starlang).sort((a,b)=>{
    return b.value-a.value;
  }).slice(0,5);
  // sort(a,b) {b-a } return array in desceding order and {a-b} gives array in ascending order
  //these are knows as compare fuction
//..................................... For languages of you stars library...........................................................ended


//..................................... Star and forks...........................................................
let { starss, forks } = repos.reduce(
  (total, item) => {
    const { stargazers_count, name, forks } = item;
    total.starss[stargazers_count] = { label: name, value: stargazers_count };
    total.forks[forks] = { label: name, value: forks };
    return total;
  },
  {
    starss: {},
    forks: {},
  }
);

starss = Object.values(starss).slice(-5).reverse();
forks = Object.values(forks).slice(-5).reverse();
  return <section className='section'>
    <Wrapper className="section-center">
  {/* <ExampleChart data={chartData}></ExampleChart> */}
  <AnimationWrapper>
  <Pie3D data={languages}></Pie3D></AnimationWrapper>
  <AnimationWrapper><Column3D data={starss}></Column3D></AnimationWrapper>
  <AnimationWrapper><Doughnut2D data={starlang}></Doughnut2D></AnimationWrapper>
  <AnimationWrapper><Bar3D data={forks}></Bar3D></AnimationWrapper>
  </Wrapper>
  </section> 
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
