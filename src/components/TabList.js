import { useContext, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap'

import ByGenre from './ByGenre';
import GameList from './GameList';

import '../App.css'

import { UserDetailsContext } from '../App'

function TabList() {

  const [route, setRoute] = useState(null)
  const {user} = useContext(UserDetailsContext)

  return (
    <Tabs defaultActiveKey="list" id="uncontrolled-tab-example" className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        <GameList route={route} setRoute={setRoute}/>
      </Tab>
      <Tab eventKey="toprated" title="Top Rated">
        <GameList />
      </Tab>
      <Tab eventKey="genre" title="By Genre">
        <ByGenre />
        <GameList />
      </Tab>
      {!user  
      ?<Tab eventKey="favorite" title="My Favorites" disabled={true}>
      </Tab>
      :<Tab eventKey="favorite" title="My Favorites">
        <GameList />
      </Tab>
      }
    </Tabs>
  );
}

export default TabList