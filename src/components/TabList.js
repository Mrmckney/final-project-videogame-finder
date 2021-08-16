import { Tabs, Tab } from 'react-bootstrap'

import TopGames from './TopGames';
import Trending from './Trending';
import Favorites from './Favorites';
import ByGenre from './ByGenre';

import '../App.css'

function TabList() {
  return (
    <Tabs defaultActiveKey="list" id="uncontrolled-tab-example" className="mb-3 tab-list">
      <Tab eventKey="topgames" title="Top Games">
        <TopGames />
      </Tab>
      <Tab eventKey="trending" title="Trending">
        <Trending />
      </Tab>
      <Tab eventKey="favorite" title="My Favorites">
        <Favorites />
      </Tab>
      <Tab eventKey="genre" title="By Genre">
        <ByGenre />
      </Tab>
    </Tabs>
  );
}

export default TabList