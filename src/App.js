
import React, { useState, useEffect } from 'react';
import './App.css';
import Event from './components/Event/Event';
import Auth from './components/Auth/Auth'; 
import Logout from './components/Logout/Logout'; 
import Navbar from './components/Navbar/Navbar'; 
import UserProfile from './components/UserProfile/UserProfile';


const App = () => {

  const [sessionToken, setSessionToken] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if(token) {
        setSessionToken(token)
      }
    }, [] // empty bracket fixes code continuously running. 
  )

  useEffect(
    () => {
      const currentID = localStorage.getItem('userID');
      if(currentID) {
        setCurrentUser(currentID);
      }
    }, []
  )

  const updateToken = (newToken, userID) => {
    setSessionToken(newToken); 
    localStorage.setItem('token', newToken);
     // this makes sure the user is still logged in with their token if the page refreshes or the user leaves the page 
    localStorage.setItem('userID', userID);//This will allow us to run logic that needs the ID of the current user.
  }

  const clearToken = () => {
    setSessionToken(undefined)
    setCurrentUser(undefined)
    localStorage.clear()
  }


  return (
    <div className="App">


      { !sessionToken ? <Auth updateToken={updateToken} /> : <div>
          <Navbar clearToken={clearToken} />
          {/* <UserProfile /> */}
          <Event currentUser={currentUser} />
        </div>}

    </div>
  );
}

export default App;
