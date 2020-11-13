// == Import npm
import React, {useState, useEffect, useReducer} from 'react';
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
  // const [initialData, setInitialData] = useState([]);
  const [query, setQuery] = useState(DEFAULT_QUERY);
  // Pour la gestion du state du loader, true = tourne, false = s'arrete
  // const [loading, setLoading] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_RESULTS' : {
        return {...state, loading : true};
      }
      case 'UPDATE_REPOS' : {
        return {...state, initialData : action.payload, loading: false };
      }
    }
  };

// Utilisation de useReducer pour gérer l'état de App
  const [state, dispatch] = useReducer(reducer, {
    initialData: [],
    loading: false,
  });

  const fetchRepos = () => {
    axios.get(GITHUB_API + query)
      .then((res) => {
        // setInitialData(res.data.items);
        // Lorsque je reçoit mes valeurs, je dis au loader de s'arreter
        // setLoading(false);
        dispatch ({ type: 'UPDATE_REPOS', payload: res.data.items });
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
    // setLoading(true);
    dispatch ({ type: 'FETCH_RESULTS' });
  };

  useEffect (fetchRepos, []);

  return (
    <div className="app">
      <Header />
      <SearchBar
        loading={state.loading}
        value={query} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Indication />
      <CardList items={state.initialData} loading={state.loading} />
    </div>
  );
};

// == Export
export default App;
