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

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_RESULTS' : {
        return {...state, loading : true};
      }
      case 'UPDATE_REPOS' : {
        return {...state, initialData : action.payload, loading: false };
      }
      case 'UPDATE_QUERY' : {
        return {...state, query : action.payload };
      }
      case 'DISPLAY_MESSAGE' : {
        return {...state, message : action.payload}
      }
    }
  };

// Utilisation de useReducer pour gérer l'état de App
  const [state, dispatch] = useReducer(reducer, {
    // Liste des repos venant de l'API
    initialData: [],
    // Input controlé pour la recherche utilisateur dans l'API des repos
    loading: false,
    // Chargement asynchrone des résultats => feedback Utilisateur 
    query: DEFAULT_QUERY,
    // Informations utiles pour créer un message à destination de l'utilisateur
    message: '',
  });

  const fetchRepos = () => {
    axios.get(GITHUB_API + state.query)
      .then((res) => {
        // setInitialData(res.data.items);
        // setLoading(false);
        dispatch ({ type: 'UPDATE_REPOS', payload: res.data.items });
        dispatch ({ type: 'DISPLAY_MESSAGE', payload: res.data.total_count });
      }
    );
  };

  const handleChange = (evt) => {
    // setQuery(evt.target.value);
    dispatch ({ type : 'UPDATE_QUERY', payload : evt.target.value});
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
        value={state.query} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Indication message={state.message}/>
      <CardList items={state.initialData} loading={state.loading} />
    </div>
  );
};

// == Export
export default App;
