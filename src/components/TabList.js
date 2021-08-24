import { useContext, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

import ByGenre from './ByGenre';
import GameList from './GameList';

import '../App.css'

import { UserDetailsContext } from '../App'

function TabList() {

  const [route, setRoute] = useState(null)
  const {user, favData, setFavData} = useContext(UserDetailsContext)

  return (
    <Tabs defaultActiveKey="list"
      id="uncontrolled-tab-example"
      onSelect={key => {
        setRoute(key)
        if(key !== "favorites"){
          setFavData('')
        }
      }}
      className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        <GameList route={route} favData={favData} setFavData={setFavData} />
      </Tab>
      <Tab eventKey="toprated" title="Top Rated">
        <GameList route={route} />
      </Tab>
      <Tab eventKey="futurereleases" title="Future Releases">
        <GameList route={route} />
      </Tab>
      <Tab eventKey="alphabet" title="By Genre">
        <ByGenre />
        <br />
        <br />
        <GameList route={route} />
      </Tab>
      <Tab eventKey="favorites" title="My Favorites" disabled={!user}>
        {user && <GameList route={route} />}
      </Tab>
    </Tabs>
  );
}

export default TabList