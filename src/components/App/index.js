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
const DEFAULT_QUERY = "react";

// == Composant
const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [query, setQuery] = useState(DEFAULT_QUERY);
  // Pour la gestion du state du loader, true = tourne, false = s'arrete
  const [loading, setLoading] = useState(false);

  const fetchRepos = () => {
    axios.get(GITHUB_API + query, {
      headers: {
        Authorization: 'token a0067ee84154fda26b536a71b05189d7b31ebf2d',
      },
    })
      .then((res) => {
        setInitialData(res.data.items);
        // Lorsque je reçoit mes valeurs, je dis au loader de s'arreter
        setLoading(false);
      }
    );
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchRepos();
    // Lorsque je tape sur entré, je demande au loader de se mettre en route
    setLoading(true);
  };


  useEffect (fetchRepos, []);

  return (
    <div className="app">
      <Header />
      <SearchBar
        loading={loading}
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
