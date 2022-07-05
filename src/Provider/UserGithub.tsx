import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/Api';
import { Profile } from '../types/Profile';
import { Repos } from '../types/Repositories';
import { Starred } from '../types/Starred';

interface ProfileGithubProviderProps {
  children: ReactNode;
}

interface ProfileGithubContextData {
  searchProfileGithub: Profile;
  repositories:Repos[];
  starred:Starred[];
  GetSearchProfile: (Username: string) => Promise<void>;
  active: string;
  setActive:(name:'Repos' | 'Starred') => void;
  loading:boolean;
}

const ProfileContext = createContext<ProfileGithubContextData>({} as ProfileGithubContextData);

export function ProfileProvider({ children }: ProfileGithubProviderProps): JSX.Element {
  
    const [searchProfileGithub , setSearchProfileGithub] = useState({} as Profile);
    const [repositories , setRepositories] = useState({} as Repos[]);
    const [starred , setStarred ] = useState({} as Starred[]); 
    const [loading , setLoading] = useState(false);
    const [active , setActive] = useState<'Repos' | 'Starred' | ''>('');

    useEffect(() => {
      if(location.pathname === '/repos'){
          setActive('Repos');
      }
      if(location.pathname === '/starred'){
          setActive('Starred');
      }
    },[]);

    const GetSearchProfile = async(Username: string) => {
      try {
      setLoading(true);
      await api.get(`/users/${Username}`).then(({data}) => { 
        
        return setSearchProfileGithub({
          login: data.login,
          id: data.id,
          url: data.html_url,
          type: data.type,
          name: data.name,
          company: data.company,
          blog: data.blog,
          location: data.location,
          email: data.email,
          bio: data.bio,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
          followers: data.followers,
          following: data.following,
          created_at:data.created_at,
          updated_at:data.updated_at,
          avatar_url: data.avatar_url,
        });
        })
      
      await api.get(`/users/${Username}/repos`).then(({data}) => {
        setRepositories(data);
      });

      await api.get(`/users/${Username}/starred`).then(({data}) => {
        setStarred(data);
      });

      setLoading(true);
      } catch (error) {
        alert('Usuário não existente');
        setLoading(false);
      }
    };
  
  return (
    <ProfileContext.Provider 
      value={{searchProfileGithub , GetSearchProfile , repositories , starred , active , setActive , loading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useGithub(): ProfileGithubContextData {
  const context = useContext(ProfileContext);
  return context;
}