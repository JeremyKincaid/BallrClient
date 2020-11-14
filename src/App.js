
import React, { useState, useEffect } from 'react';
import './App.css';
import Event from './components/Event/Event';
import Auth from './components/Auth/Auth'; 
import Logout from './components/Logout/Logout'; 

const App = () => {

  const [sessionToken, setSessionToken] = useState(undefined);
  
  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if(token) {
        setSessionToken(token)
      }
    }, [] // empty bracket fixes code continuously running. 
  )

  const updateToken = (newToken) => {
    setSessionToken(newToken) 
    localStorage.setItem('token', newToken) // this makes sure the user is still logged in with their token if the page refreshes or the user leaves the page 
  }

  const clearToken = () => {
    setSessionToken(clearToken)
    localStorage.clear()
  }

  return (
    <div className="App">
      { !sessionToken ? <Auth updateToken={updateToken} /> : <Logout clearToken={clearToken} /> } 
      <Event />
    </div>
  );
}

export default App;
