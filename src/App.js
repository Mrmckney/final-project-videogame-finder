import React, { useState, createContext } from 'react';

import NavBar from './components/NavBar';
import TabList from './components/TabList';
import HomePageGames from './components/HomePageGames'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const UserDetailsContext = createContext(null)

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [isLogin, setIsLogin] = useState(false)
  const [show, setShow] = useState(false)
  const [gameData, setGameData] = useState([])
  const [favData, setFavData] = useState([])
  const [displayName, setDisplayName] = useState(localStorage.getItem('displayname'))
  const [home, setHome] = useState(true)
  return (
    <>
      <UserDetailsContext.Provider value={{ user, setUser, show, setShow, isLogin, setIsLogin, gameData, setGameData, favData, setFavData, displayName, setDisplayName, setHome }}>
      <NavBar  />
      <TabList />
      {home === true &&
      <>
      <h3 style={{textAlign: 'center'}}>Historic Games</h3>
      <HomePageGames />
      </>
      }
      </UserDetailsContext.Provider>
    </>
  );
}

export default App;
