import { useContext, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

import ByGenre from './ByGenre';
import ByPlatform from './ByPlatform';
import GameList from './GameList';
import ByTag from './ByTag';
import SearchBar from './SearchBar';

import '../App.css'

import { UserDetailsContext } from '../App'

function TabList() {

  const [route, setRoute] = useState(null)
  const {user, favData, setFavData, setHome} = useContext(UserDetailsContext)

  return (
    <Tabs defaultActiveKey="list"
      id="uncontrolled-tab-example"
      onSelect={key => {
        setRoute(key)
        setHome(false)
      }}
      className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        {route === 'topgames' && <GameList route={route} favData={favData} setFavData={setFavData} />}
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
      <Tab eventKey="platform" title="By Platform">
        <ByPlatform />
        <br />
        <br />
        {route === 'platform' &&  <GameList route={route} />}
      </Tab>
      <Tab eventKey="search" title="Search">
        <SearchBar />
        <br />
        {route === 'search' &&  <GameList route={route} />}
      </Tab>
      <Tab eventKey="tag" title="By Tags">
        <ByTag />
        <br />
        <br />
        {route === 'tag' &&  <GameList route={route} />}
      </Tab>
      <Tab eventKey="favorites" title="My Favorites" disabled={!user}>
        {route === 'favorites' &&  <GameList route={route} />}
      </Tab>
    </Tabs>
  );
}

export default TabList