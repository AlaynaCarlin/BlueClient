import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Site/Footer";
import Auth from "./Components/auth/Auth";
import Sitebar from "./Components/auth/Navbar";
import LogIndex from "./Components/logs/LogIndex";
import LogFood from "./Components/logs/CreateLog";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <LogIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
     {/* <LogFood /> */}
     <Sitebar clickLogout={clearToken} />
     {protectedViews()}
      <Footer />
    </div>
  );
}

export default App;
