import React, { createContext, useCallback, useState } from "react";
import api from "../services";

export const GithubContext = createContext({
  loading: undefined,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }:any) => {
  const [errApi , setErrorApi] = useState(false);
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: 0,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      bio:undefined,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username:any) => {  
    
    setGithubState((prevState) => ({
      ...prevState,
      loading: prevState.loading = 0,
    }));

    api
      .get(`users/${username}`)
      .then(({data}) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            bio:data.bio,
          },
        }));
      }).then(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: prevState.loading = 1,
          }));
      }).catch((error) => {
        if(error.response){
          if(error.response.status === 404){
            return setGithubState((prevState) => ({
              ...prevState,
              loading: prevState.loading = 2,
            }));
          }
        };
      });
  };

  const getUserRepos = (username:any) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username:any) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue:any = {
    githubState,
    getUser: useCallback((username:string) => getUser(username), []),
    getUserRepos: useCallback((username:string) => getUserRepos(username), []),
    getUserStarred: useCallback((username:string) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;