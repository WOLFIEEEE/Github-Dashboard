import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import mockStars from './mockData.js/mockStars';
import mockFollowing from './mockData.js/mockFollowing'
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext =React.createContext();

const GithubProvider =({children})=>{
    const [GithubUser, setGithubUser]=useState(mockUser);
    const [repos, setRepos]=useState(mockRepos);
    const [followers, setFollowers]=useState(mockFollowers);
    const [userstars,setUserstars]=useState(mockStars);
    const [following,setfollowing]=useState(mockFollowing)
//Request Loading
    const[request,setRequest]=useState(0);
    const[isloading,setIsloading]=useState(false);

    //error
    const [error,setError]=useState({show:false,msg:""})

    //search

    const searchGithubUser=async(user)=>
    {
      
        toggleError();
        setIsloading(true)
        const response =await axios(`${rootUrl}/users/${user}`).
        catch(err=> console.log(err));
        const Followers =await axios(`${rootUrl}/users/${user}/followers`).
        catch(err=> console.log(err));
        const Stars =await axios(`${rootUrl}/users/${user}/starred`).
        catch(err=> console.log(err));
        const Repos =await axios(`${rootUrl}/users/${user}/repos?per_page=100`).
        catch(err=> console.log(err));
        const Following =await axios(`${rootUrl}/users/${user}/following`).
        catch(err=> console.log(err));
        if(response)
        {
            setGithubUser(response.data);
            setFollowers(Followers.data);
            setRepos(Repos.data);
            setUserstars(Stars.data);
            setfollowing(Following.data);
        }    
        
        else
        {
            toggleError(true,"user Not found");
        }
        checkRequest();
        setIsloading(false);
    };

    //check rate
    const checkRequest=()=>
    {
        axios(`${rootUrl}/rate_limit`)
        .then(({data})=>{
            let {rate:{remaining}}=data;

            setRequest(remaining)
            if(remaining==0)
            {
                toggleError(true,"Sorry you have exceeded your hourly limit");
            }
        })
        .catch((err)=>console.log(err));
    }

    function toggleError(show=false,msg='')
    {
        setError({show,msg})
    }
    //error

    useEffect(checkRequest,[])
    return (
    <GithubContext.Provider value={{GithubUser,repos,followers,userstars,request,error,searchGithubUser,isloading,following}}>
        {children}
    </GithubContext.Provider>
    )
}
 export{GithubProvider,GithubContext};