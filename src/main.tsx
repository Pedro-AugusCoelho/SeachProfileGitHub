import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProfileProvider } from './Provider/UserGithub';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
    <ProfileProvider>
    
      <BrowserRouter>
    
        <App />
    
      </BrowserRouter>
    
    </ProfileProvider>
  
  </React.StrictMode>
)
