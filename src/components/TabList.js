import { Tabs, Tab } from 'react-bootstrap'

import ByGenre from './ByGenre';
import GameList from './GameList';

import '../App.css'

function TabList() {
  return (
    <Tabs defaultActiveKey="list" id="uncontrolled-tab-example" className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        <GameList />
      </Tab>
      <Tab eventKey="trending" title="Trending">
        <GameList />
      </Tab>
      <Tab eventKey="genre" title="By Genre">
        <ByGenre />
        <GameList />
      </Tab>
      <Tab eventKey="favorite" title="My Favorites">
        <GameList />
      </Tab>
    </Tabs>
  );
}

export default TabList