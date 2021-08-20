import React, { useState, createContext } from 'react';

import NavBar from './components/NavBar';
import TabList from './components/TabList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const UserDetailsContext = createContext(null)

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <UserDetailsContext.Provider value={{ user, setUser }}>
      <NavBar  />
      <TabList />
      </UserDetailsContext.Provider>
    </>
  );
}

export default App;
