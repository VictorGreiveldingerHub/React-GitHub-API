// == Import npm
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// == Import
import SearchBar from 'src/components/SearchBar';
import Indication from 'src/components/Indication';
import CardList from 'src/components/CardList';
import Header from 'src/components/Header';

import './styles.scss';

const GITHUB_API = "https://api.github.com/search/repositories?q=";
const DEFAULT_QUERY = "ruby";

// == Composant
const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [query, setQuery] = useState(DEFAULT_QUERY);

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchRepos();
  };

  const fetchRepos = () => {
    axios.get(GITHUB_API + query)
      .then((res) => {
        setInitialData(res.data.items);
      }
    );
  };

  useEffect (fetchRepos, []);

  return (
    <div className="app">
      <Header />
      <SearchBar 
        value={query} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Indication />
      <CardList items={initialData}/>
    </div>
  );
};

// == Export
export default App;
