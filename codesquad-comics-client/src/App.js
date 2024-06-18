import React, { useState } from 'react';
import Home from "./components/Home";
import Admin from "./components/Admin"
import Header from './shared/Header';
import Footer from './shared/Footer';


function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />
    </div>
  );
}

export default App;