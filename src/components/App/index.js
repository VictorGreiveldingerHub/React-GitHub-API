// == Import npm
import React, {useState} from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import Indication from 'src/components/Indication';
import CardList from 'src/components/CardList';
import Header from 'src/components/Header';
import data from 'src/data/repo';

import './styles.scss';

// == Composant
const App = () => {
  const [initialData, setInitialData] = useState(data);

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Indication data={initialData}/>
      <CardList />
    </div>
  );
};

// == Export
export default App;
