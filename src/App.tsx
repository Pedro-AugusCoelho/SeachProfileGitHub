import React from "react";
import Layout from "./Components/Layout";
import NoSearch from "./Components/No-Search";
import Profile from "./Components/Profile";
import Repositories from "./Components/Repositories";
import useGithub from "./Hooks/index";

const App = () => {
  const { githubState } = useGithub();
  

  console.log(githubState.loading);
  
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading === 0 &&
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70vh'}}>
                <p>Loading...</p>
              </div>
          }
          {githubState.loading === 1 &&
            <>
              <Profile />
              <Repositories />
            </>
          }
          {githubState.loading === 2 &&
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70vh'}}>
              <p>Usuário Não Encontrado</p>
            </div>
          }
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
