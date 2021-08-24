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
        if(key !== "favorites"){
          setFavData('')
        }
        setRoute(key)
      }}
      className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        {route === 'topgames' &&<GameList route={route} favData={favData} setFavData={setFavData} />}
      </Tab>
      <Tab eventKey="toprated" title="Top Rated">
        {route === 'toprated' && <GameList route={route} />}
      </Tab>
      <Tab eventKey="futurereleases" title="Future Releases">
        {route === 'futurereleases' && <GameList route={route} /> }
      </Tab>
      <Tab eventKey="alphabet" title="By Genre">
        <ByGenre />
        <br />
        <br />
        {route === 'alphabet' &&  <GameList route={route} />}
      </Tab>
      <Tab eventKey="favorites" title="My Favorites" disabled={!user}>
        {route === 'favorites' &&  <GameList route={route} />}
      </Tab>
    </Tabs>
  );
}

export default TabList