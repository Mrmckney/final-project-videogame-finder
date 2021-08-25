import React, { useState, createContext } from 'react';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const UserDetailsContext = createContext(null)

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [isLogin, setIsLogin] = useState(false)
  const [show, setShow] = useState(false)
  const [gameData, setGameData] = useState([])
  const [favData, setFavData] = useState([])
  const [displayName, setDisplayName] = useState(null)

  return (
    <>
      <UserDetailsContext.Provider value={{ user, setUser, show, setShow, isLogin, setIsLogin, gameData, setGameData, favData, setFavData, displayName, setDisplayName }}>
      <NavBar  />
      <TabList />
      </UserDetailsContext.Provider>
    </>
  );
}

export default App;
