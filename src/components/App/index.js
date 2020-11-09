// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import Indication from 'src/components/Indication';
import CardList from 'src/components/CardList';

import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => {

  return (
    <div className="app">
      <SearchBar />
      <Indication />
      <CardList />
    </div>
  );
};

// == Export
export default App;
