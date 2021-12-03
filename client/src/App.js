import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/auth/Login';
import SignUp from './Components/auth/Signup';
import Footer from './Components/Site/Footer';
import Auth from './Components/auth/Auth';
import Sitebar from './Components/auth/Navbar'

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);

  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    // return (sessionToken === localStorage.getItem('token') ? <LogIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)
  }


  return (
    <div className="App">
      
     <Auth />
     {/* <Sitebar clickLogout={clearToken} /> */}
      {/* {protectedViews()} */}
      <Sitebar />
     <SignUp />
     <Login />
     <Footer />
    </div>
  );
}

export default App;
