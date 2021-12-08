import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Site/Footer";
import Auth from "./Components/auth/Auth";
import Sitebar from "./Components/auth/Navbar";
import LogIndex from "./Components/logs/LogIndex";

// import backgroundImage from "./Components/assets/multicolor-fruit-splash-abstract-collection-fruits-slices-juice-rainbow-colors-healthy-food-drink-concept-isolated-157413565.jpg";

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
      <div className="App-header">
        <Sitebar clickLogout={clearToken} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {protectedViews()}
      </div>
      <Footer className="loginStyle" />
    </div>
    // </div>
  );
}

export default App;
