// == Import npm
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// == Import
import SearchBar from 'src/components/SearchBar';
import Indication from 'src/components/Indication';
import CardList from 'src/components/CardList';
import Header from 'src/components/Header';
import data from 'src/data/repo';

import './styles.scss';

const GITHUB_API = "https://api.github.com/search/repositories?q=react";

// == Composant
const App = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect (
    () => {
      axios.get(GITHUB_API)
        .then((res) => {
          console.log(res);
          setInitialData(res.data.items);
        });
    },
    [],
  );

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Indication nbr={initialData}/>
      <CardList items={initialData}/>
    </div>
  );
};

// == Export
export default App;
